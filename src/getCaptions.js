const { getSubtitles } = require("youtube-captions-scraper");

/**
 * 動画IDから字幕を取得（英語）
 */
async function getCaptions(videoId) {
  try {
    const captions = await getSubtitles({
      videoID: videoId,
      lang: "en",
    });

    return captions.map((c) => ({
      start: parseFloat(c.start),
      dur: parseFloat(c.dur),
      text: c.text,
    }));
  } catch (e) {
    // 字幕がない動画はスキップ
    return null;
  }
}

module.exports = { getCaptions };
