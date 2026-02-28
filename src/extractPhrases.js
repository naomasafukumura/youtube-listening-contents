/**
 * 字幕データからフレーズを検索
 */
function searchPhrase(captions, phrase) {
  const results = [];
  const lowerPhrase = phrase.toLowerCase();

  for (const caption of captions) {
    if (caption.text.toLowerCase().includes(lowerPhrase)) {
      results.push({
        text: caption.text,
        startSeconds: Math.floor(caption.start),
        timestamp: formatTime(caption.start),
      });
    }
  }

  return results;
}

/**
 * 字幕データから全フレーズの出現頻度をカウント
 * AIに投げる前の前処理用：よく使われるn-gramを抽出
 */
function extractFrequentPhrases(captions, minWords = 2, maxWords = 5) {
  const phraseCount = {};

  for (const caption of captions) {
    const words = caption.text
      .toLowerCase()
      .replace(/[^a-z' ]/g, "")
      .split(/\s+/)
      .filter(Boolean);

    for (let n = minWords; n <= maxWords; n++) {
      for (let i = 0; i <= words.length - n; i++) {
        const phrase = words.slice(i, i + n).join(" ");
        if (!phraseCount[phrase]) {
          phraseCount[phrase] = { count: 0, examples: [] };
        }
        phraseCount[phrase].count++;
        if (phraseCount[phrase].examples.length < 3) {
          phraseCount[phrase].examples.push({
            text: caption.text,
            startSeconds: Math.floor(caption.start),
          });
        }
      }
    }
  }

  // 出現回数でソート、上位を返す
  return Object.entries(phraseCount)
    .filter(([, v]) => v.count >= 3)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 200)
    .map(([phrase, data]) => ({
      phrase,
      count: data.count,
      examples: data.examples,
    }));
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

module.exports = { searchPhrase, extractFrequentPhrases };
