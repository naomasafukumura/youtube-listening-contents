# YouTube Listening Contents

ネイティブYouTuberの動画から、実際に使われている英語フレーズを抽出・検索するツール。

## セットアップ

```bash
npm install
cp .env.example .env
# .env に YouTube API キーを設定
```

## 使い方

### 1. チャンネルの字幕を一括取得
```bash
node index.js fetch <channelId>
```

### 2. 保存済みデータからフレーズ検索
```bash
node index.js search "I'm down for that"
```

### 3. チャンネルの頻出フレーズを自動抽出
```bash
node index.js extract <channelId>
```

## YouTube APIキーの取得方法

1. [Google Cloud Console](https://console.cloud.google.com/) にアクセス
2. プロジェクトを作成
3. YouTube Data API v3 を有効化
4. 認証情報 → APIキーを作成
5. `.env` に設定
