# AI就活プロ ランディングページ

大学生向けAIキャリア教育サービス「AI就活プロ」の公式ランディングページ。

## 構成

```
site/                      # 公開対象（Vercel outputDirectory）
├── index.html             # LP本体
├── support.js             # 描画ランタイム
├── image-slot.js          # 画像スロットコンポーネント
├── .image-slots.state.json# 画像データ（data URI埋め込み）
├── _ds/                   # デザインシステム（CSSトークン・コンポーネント）
└── assets/                # 画像アセット
```

## ローカル確認

```bash
npx serve site
```

## デプロイ

`main` ブランチへの push で Vercel が自動デプロイする。静的サイトのためビルド工程はなし（`vercel.json` の `outputDirectory: "site"` をそのまま配信）。
