---
allowed-tools: Bash(git:*), Bash(gh:*)
description: 与えられたissue番号の開発を行う
---

## 概要
 $ARGUMENTS で与えられた番号のissueに書かれている内容に従って開発を進めてください

## ルール

* issueやコメントに実装計画があったらそれに従ってください
* issueを読み込んだ後に不明点があった場合は必ずユーザーに質問をしてください
  * 不明点が解決した際にはissueにコメントで解決した内容を残してください
* **`pnpm test` を引数なしで実行禁止**: 全テスト実行はPC負荷が非常に高く、操作不能になる。必ず `pnpm test <pattern>` のように対象を絞って実行すること

## 参考ドキュメント

* ディレクトリ構成: docs/overview/architecture.md
* テスト規約: docs/overview/testing.md
* フォーム実装パターン: docs/overview/form_patterns.md

## 補足
### useEffectの仕様に関して
#### useEffect ポリシー

useEffect は **外部世界との同期** のためだけに使うべきです。
例えば以下のようなケースです。

* API 呼び出し
* WebSocket 接続
* ブラウザ API の利用
* 外部ストアへの購読
* タイマー

それ以外の用途では、useEffect を使ってはいけません。

#### アンチパターン

* props や派生した値をローカル state にコピーする
* フラグの変更に反応してロジックを実行する
* ユーザー操作をイベントハンドラではなく effect の中で処理する
* 派生 state やバリデーション用 state を effect の中で更新する
* 依存配列が空の useEffect による「一度きりの初期化」
  （代わりに useMemo を使う）

#### 原則

* props や state から導出できる値は、レンダー中に計算する
* ユーザー操作は effect ではなくイベントハンドラで処理する
* effect は外部システムに触れる「本当の副作用」に限定する
* useEffect を書くときは、それが **どの外部リソースと同期しているのか** を説明する短いコメントを必ず付ける

### knipに関する補足

* serviceだけを作成するなどUIとの繋ぎこみを行わないissueを対応する際にknipによる未使用エラーが発生する際がある
* 未使用エラーが出たけど次のissueでUIとの繋ぎこみを行う等で必要な場合は `/** @knipignore */` を上の行に使って適切に除外を行ってください
* container component と presentational component の繋ぎこみを行った後などでも未使用だった場合は不要としてその関数・componentを削除してください
* 繋ぎこみ後は `/** @knipignore */`  が残らないようにしてください
* knipの動作確認をする際には `pnpm knip --tags=-knipignore` を使ってください
