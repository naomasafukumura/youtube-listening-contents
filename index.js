const fs = require("fs");
const path = require("path");
const { getAllVideos } = require("./src/getVideos");
const { getCaptions } = require("./src/getCaptions");
const { searchPhrase, extractFrequentPhrases } = require("./src/extractPhrases");
const { CHANNELS } = require("./src/channels");
require("dotenv").config();

const DATA_DIR = path.join(__dirname, "data");

/**
 * モード1: チャンネルの字幕を一括取得してローカルに保存
 * 使い方: node index.js fetch <channelId>
 */
async function fetchChannel(channelId) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

  console.log(`チャンネル ${channelId} の動画を取得中...`);
  const videos = await getAllVideos(channelId);

  const channelData = {
    channelId,
    channelTitle: videos[0]?.channelTitle || "Unknown",
    fetchedAt: new Date().toISOString(),
    videos: [],
  };

  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    process.stdout.write(`\r字幕取得中: ${i + 1}/${videos.length} - ${video.title.slice(0, 40)}`);

    const captions = await getCaptions(video.videoId);
    channelData.videos.push({
      ...video,
      captions: captions || [],
      hasCaptions: !!captions,
    });

    // API制限回避のため少し待つ
    await new Promise((r) => setTimeout(r, 200));
  }

  console.log("");

  const filePath = path.join(DATA_DIR, `${channelId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(channelData, null, 2));

  const withCaptions = channelData.videos.filter((v) => v.hasCaptions).length;
  console.log(`完了! ${videos.length}本中${withCaptions}本の字幕を取得`);
  console.log(`保存先: ${filePath}`);
}

/**
 * モード2: 保存済みデータからフレーズ検索
 * 使い方: node index.js search "I'm down for that"
 */
function search(phrase) {
  if (!fs.existsSync(DATA_DIR)) {
    console.log("データがありません。先に fetch を実行してください。");
    return;
  }

  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".json"));
  console.log(`「${phrase}」を検索中...\n`);

  let totalResults = 0;

  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), "utf-8"));

    for (const video of data.videos) {
      if (!video.captions || video.captions.length === 0) continue;

      const results = searchPhrase(video.captions, phrase);
      if (results.length > 0) {
        for (const r of results) {
          totalResults++;
          console.log(`[${data.channelTitle}] ${video.title}`);
          console.log(`  "${r.text}"`);
          console.log(`  ${r.timestamp} → https://youtube.com/watch?v=${video.videoId}&t=${r.startSeconds}`);
          console.log("");
        }
      }
    }
  }

  console.log(`合計 ${totalResults} 件見つかりました。`);
}

/**
 * モード3: 保存済みデータから頻出フレーズを抽出
 * 使い方: node index.js extract <channelId>
 */
function extract(channelId) {
  const filePath = path.join(DATA_DIR, `${channelId}.json`);
  if (!fs.existsSync(filePath)) {
    console.log(`データがありません: ${channelId}`);
    return;
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  console.log(`${data.channelTitle} の頻出フレーズを抽出中...\n`);

  // 全動画の字幕を結合
  const allCaptions = data.videos.flatMap((v) => v.captions || []);
  const phrases = extractFrequentPhrases(allCaptions);

  // 結果表示
  for (let i = 0; i < Math.min(50, phrases.length); i++) {
    const p = phrases[i];
    console.log(`${i + 1}. "${p.phrase}" (${p.count}回)`);
    for (const ex of p.examples) {
      const video = data.videos.find((v) =>
        v.captions?.some((c) => Math.floor(c.start) === ex.startSeconds && c.text === ex.text)
      );
      if (video) {
        console.log(`   → ${video.title} (${formatTime(ex.startSeconds)})`);
        console.log(`     https://youtube.com/watch?v=${video.videoId}&t=${ex.startSeconds}`);
      }
    }
    console.log("");
  }

  // JSONでも保存
  const outputPath = path.join(DATA_DIR, `${channelId}_phrases.json`);
  fs.writeFileSync(outputPath, JSON.stringify(phrases, null, 2));
  console.log(`全フレーズを保存: ${outputPath}`);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// CLI
const [, , command, arg] = process.argv;

switch (command) {
  case "fetch":
    if (!arg) {
      console.log("使い方: node index.js fetch <channelId>");
      process.exit(1);
    }
    fetchChannel(arg);
    break;
  case "search":
    if (!arg) {
      console.log('使い方: node index.js search "フレーズ"');
      process.exit(1);
    }
    search(arg);
    break;
  case "extract":
    if (!arg) {
      console.log("使い方: node index.js extract <channelId>");
      process.exit(1);
    }
    extract(arg);
    break;
  default:
    console.log(`
YouTube Listening Contents - 使い方

1. チャンネルの字幕を取得:
   node index.js fetch <channelId>

2. フレーズを検索:
   node index.js search "I'm down for that"

3. 頻出フレーズを抽出:
   node index.js extract <channelId>
    `);
}
