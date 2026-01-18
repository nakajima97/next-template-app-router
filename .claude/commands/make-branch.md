---
allowed-tools: Read(*.md),Bash(gh:*),Bash(git:*)
description: 引数で渡されたissueのブランチを作成する
---

## 概要

- $ARGUMENTS のissueを開始するためのブランチを作成してそのissueと紐づけてください

## 作成ルール

- ブランチは次の形式で作成してください：<issue番号>-<種別>/<内容を表す短い名前>
  - issue番号
    - 対応するissueの番号
  - 種別
    - 作業内容に応じて以下のいずれかを使用する
      - feature : 新機能追加
      - fix : バグ修正
      - refactor : リファクタリング
      - docs : ドキュメント修正
  - 内容を表す短い名前
    - ハイフン区切り
- 作成したブランチは`gh issue develop`でissueと関連付けしてください
