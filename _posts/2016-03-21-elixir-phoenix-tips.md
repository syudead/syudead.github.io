---
title: Elixir Phoenix 備忘録
tags: elixir phoenix
---

Phoenixで遊んでるけど、なかなかハードルが高い

躓いた箇所をメモしておく

まったく正しい保証はありません

## 今回作成した環境

* phoenix 1.1.4

## 依存ソフトウェアのバージョン

* npm > 3.0?
* nodejs > 5.0?
* elixir > 1.1?

javascript関連は作成した環境のバージョンが低すぎてコンパイルに失敗する

elixirは最初に1.0.4を使用したのだが、gettextのバージョン互換性により起動できなかった

## アプリ作成手順

* mix phoenix.new <アプリ名>
* cd <アプリ名>
* mix deps.get
* npm install
* mix ecto.create # db作成？

## 土台作成手順

* mix phoenix.gen.html User users name:string # scaffold
* vi web/router.ex # resources "/users", UserController を追記
* mix ecto.migrate

## 本番環境の作成・サーバー起動

* MIX_ENV=prod mix ecto.create
* MIX_ENV=prod mix ecto.migrate
* MIX_ENV=prod mix compile.protocols
* MIX_ENV=prod PORT=4001 elixir -pa _build/prod/consolidated -S mix phoenix.server

