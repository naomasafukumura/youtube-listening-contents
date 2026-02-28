/**
 * 対象チャンネルリスト
 * ここにMasaが認めたチャンネルを追加していく
 *
 * チャンネルIDの調べ方:
 * 1. チャンネルページを開く
 * 2. URLの末尾が /channel/UCxxxxx → それがID
 * 3. または https://www.youtube.com/@handle の場合、
 *    YouTube APIで handle → channelId を取得
 */
const CHANNELS = [
  // 例:
  // { id: "UCxxxxxx", name: "チャンネル名", category: "vlog" },
];

module.exports = { CHANNELS };
