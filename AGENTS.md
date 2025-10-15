# Repository Guidelines

## プロジェクト構成とモジュール配置
- Next.js 15 の App Router は `app/` にあり、`app/products/[id]` が Markdown 詳細ページ、`app/status`・`app/timeline`・`app/contribute` が各ビューを提供します。
- 共通スタイルは `app/globals.css` に集約し、Tailwind の設定は `tailwind.config.ts` で管理します。
- タイムラインや部品表などのドメインデータは `data/` の TypeScript モジュールに置き、GitHub 連携などの再利用ロジックは `lib/` にまとめます。
- プロダクト計画の Markdown 原稿（`AI-Necklace-Product-Plan.md`、`Fan-Monitor-Product-Plan.md`）はリポジトリ直下に配置し、`fs` 経由で読み込みます。
- レンダリング共通設定やカスタムヘッダーは `next.config.js` と `vercel.json` で管理し、Vercel 互換の設定を維持します。

## ビルド・テスト・開発コマンド
- `npm run dev`: ホットリロード付きの開発サーバーを `http://localhost:3000` で起動します。
- `npm run build`: 本番バンドルを生成します。公開前に実行し静的生成の不備を確認してください。
- `npm run start`: 最新ビルドをサーブし、ローカルでのスモークテストに利用します。
- `npm run lint`: `eslint-config-next` を用いる ESLint を実行します。失敗した場合は修正後に PR を作成してください。

## コーディングスタイルと命名規則
- TypeScript の関数コンポーネントを基本とし、2 スペースインデントと App Router API に沿った async/await パターンを採用します（例: `app/products/[id]/page.tsx`）。
- Tailwind ユーティリティは JSX 内に共存させ、独自 CSS は `app/globals.css` に限定します。
- ルートディレクトリ名は小文字ケバブケース、動的セグメントは `[param]` 形式、TypeScript の定数やヘルパーは `camelCase` を用います。
- ESLint の自動修正（`npm run lint -- --fix`）を活用し、インポートはフレームワーク → 外部ライブラリ → ローカルの順で整理します。

## テストガイドライン
- 公式テストスイートは未整備のため、追加時は `@testing-library/react` を基準にし、テストファイルはコンポーネント横（`component.test.tsx`）または `__tests__/` に配置します。
- 動的ルーティング（`generateStaticParams` と Markdown 読み込み）の動作確認を重視し、プロダクトページの描画が維持されるか検証します。
- 提出前に `npm run lint` と `npm run build` を実行し、UI 変更がある場合は手動検証結果を記録してください。
- CI 連携は未構築なので、必要に応じて `npm run test` 用のスクリプトを追加し、結果を PR 説明に記載する運用を推奨します。

## 環境設定とデプロイのヒント
- `.env.local` に API キーや機密情報を配置する場合は `.gitignore` で保護し、共有が必要な値はドキュメントに整理してください。
- Vercel デプロイはローカルでの `npm run build` 成功が前提です。同じノードバージョンを使用し、差分のない状態で push してください。
- 静的アセットや Markdown を追加するときはファイル名を英数字ケバブケースに揃え、関連するローダーのパス定義を忘れず更新します。

## コミットとプルリクエストの指針
- コミットメッセージは `Add:` `Fix:` `Update:` `Refactor:` `Docs:` `Design:` など既存の接頭辞に続けて簡潔な説明を書きます（例: `Add: timeline milestone cards`）。
- PR では変更概要、関連 Issue、UI 改修ならスクリーンショットや動画、実施した確認手順（`npm run lint`、`npm run build`、手動 QA）を列挙します。
- 視覚的な変更や大きな機能追加ではレビューワーをアサインし、Markdown 原稿を更新した場合は読みやすさが維持されているかを再確認します。
- コミットは粒度を小さく保ち、翻訳やコンテンツ更新とコード変更を分けるとレビューがスムーズになります。
