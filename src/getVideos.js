const { google } = require("googleapis");
require("dotenv").config();

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

/**
 * チャンネルIDから全動画を取得
 */
async function getAllVideos(channelId) {
  const videos = [];
  let pageToken = null;

  // まずチャンネルのアップロード用プレイリストIDを取得
  const channelRes = await youtube.channels.list({
    part: "contentDetails",
    id: channelId,
  });

  const uploadsPlaylistId =
    channelRes.data.items[0].contentDetails.relatedPlaylists.uploads;

  // プレイリストから全動画を取得
  do {
    const res = await youtube.playlistItems.list({
      part: "snippet",
      playlistId: uploadsPlaylistId,
      maxResults: 50,
      pageToken: pageToken,
    });

    for (const item of res.data.items) {
      videos.push({
        videoId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        publishedAt: item.snippet.publishedAt,
        channelTitle: item.snippet.channelTitle,
      });
    }

    pageToken = res.data.nextPageToken;
  } while (pageToken);

  console.log(`${videos.length}本の動画を取得: ${videos[0]?.channelTitle}`);
  return videos;
}

module.exports = { getAllVideos };
