# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

### 開発サーバー
```bash
yarn dev  # Next.js開発サーバーをTurbopackで起動
```

### ビルドと本番
```bash
yarn build  # プロダクションビルド
yarn start  # プロダクションサーバー起動
```

### テスト
```bash
yarn test           # Vitestでテスト実行（テストファイルがない場合はパス）
yarn test:watch     # Vitestをwatchモードで実行
yarn test:coverage  # カバレッジ付きでテスト実行
yarn type-check     # TypeScript型チェック
```

### コード品質
```bash
yarn bc        # Biomeでチェック＆自動修正
yarn format    # Biomeでフォーマット
yarn lint      # Biomeでリント
```

### Storybook
```bash
yarn storybook        # Storybookサーバー起動（ポート6006）
yarn build-storybook  # Storybookビルド
```

## アーキテクチャ

### プロジェクト構成
- **Next.js 15** + **App Router** を使用
- **Yarn 4.3.1** でパッケージ管理
- **Biome** でlinting/formatting（ESLintの代替）
- **Vitest** + **jsdom** でテスト実行
- **Storybook** でコンポーネント開発
- **TypeScript** で型安全性を確保

### ディレクトリ構造
```
src/
├── app/              # Next.js App Routerのルート定義
├── components/       # 再利用可能なUIコンポーネント（アプリ全体で共有）
│   ├── presentational/  # プレゼンテーショナルコンポーネント
│   └── containers/      # コンテナコンポーネント
├── features/         # 機能固有のコンポーネント・ロジック
│   └── featureName/
│       ├── presentational/
│       ├── containers/
│       ├── hooks/
│       ├── types/
│       ├── lib/
│       ├── services/
│       └── utils/
├── hooks/           # アプリ全体で共有するカスタムReactフック
├── types/           # アプリ全体で使用する型定義
├── lib/             # 外部ライブラリの設定やラッパー
├── services/        # 外部サービスとの通信レイヤー
└── utils/           # 純粋なユーティリティ関数
```

### 設計方針
- コンポーネントをPresentational/Containerパターンで分離
- 機能ごとに`features/`ディレクトリで分割して関心の分離
- `@/*` エイリアスで`src/`ディレクトリからのインポート
- React 19を使用（resolutionsで固定）
- Biomeのフォーマット設定：スペース2つインデント、シングルクォート

### 重要な設定
- TypeScriptは5.5未満に制限
- Biomeが自動的にimportを整理
- Vitestでjsdom環境でのテスト実行
- StorybookでコンポーネントのUI開発・テスト