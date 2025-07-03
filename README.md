# 🧑‍💻 Kou Bi Shin Portfolio

Next.js（App Router）を使って構築したポートフォリオサイトです。自身のプロフィール、実績紹介、技術スタックなどを掲載しています。

## 🚀 使用技術

- [Next.js 15](https://nextjs.org/)
- TypeScript
- Tailwind CSS
- microCMS（ヘッドレスCMS）
- Framer Motion（アニメーション）
- ESLint / Prettier（コード整形）
- Vercel（デプロイ）

## 📁 ディレクトリ構成（App Router）
/app
├─ (home)/ … トップページ（MVのみ表示）
├─ (default)/ … 共通レイアウト付きのページ
│ ├─ layout.tsx … Header / Footer を含む共通レイアウト
│ ├─ about/page.tsx … 自己紹介ページ
│ └─ works/page.tsx … 実績一覧ページ
│ 　　└─[id]/page.tsx … 実績詳細ページ
/components … UI コンポーネント
/lib … API クライアント設定（microCMSなど）
/public … 画像・OGPなど静的ファイル

## 🧩 主な機能

- MV（メインビジュアル）を全てのページに表示
- サーバーコンポーネント／クライアントコンポーネントの適切な分離
- アクセシビリティ対応（ARIA属性、キーボード操作、コントラストなど）
- OGP・SEO対応（metadata, sitemap.xml, robots.txt）
- スマホ〜PCまでのレスポンシブデザイン
- ページ遷移時のメニュー自動クローズ

## 🛠 セットアップ方法

```bash
# 依存パッケージをインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

## 🌍 公開URL

[Vercelで公開中](https://portfolio-phi-two-29.vercel.app/)
