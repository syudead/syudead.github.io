---
layout: post
title: Rails Application TemplateでRailsアプリの初期セットアップを一瞬で終わらせる
tags: rails
update_date: 2016-03-27
---

Railsはウェブアプリケーションを高速で構築するのにとても便利だが、本当に小さなアプリ以外は便利なgemを入れたり初期構築にそれなりに手間がかかる

そこでRails Application Templatesという仕組みを使うとよく使うgemのインストールや毎回行う日本語設定を自動化することができる

そんなわけで、以前の記事に書いたgemのインストール＋αのtemplateを作ってみた

[https://github.com/syudead/rails_template](https://github.com/syudead/rails_template){:target="_blank"}

## 前提

* rails 4.2.6 インストール済み
* redis serverインストール済み(sidekiqをインストールするため)

## 使い方

```sh
rails _4.2.6_ new <アプリ名> -T --skip-spring -d postgresql -m https://raw.githubusercontent.com/syudead/rails_template/master/app.rb
```

オプションの説明

| オプション | 効果 | 説明 |
|:-----------:|:-----|:-----|
| T | test unitを使用しない | テストフレームワークにrspecを使用するため |
| d | データベースの種類を指定 | お好みで変更 |
| skip-spring | springを無効にする | 起動が早くなるが、あまり好きではないので無効 |
| m | 指定したテンプレートを実行する | 今回の趣旨 |

以下実行されることの概要

## 日本語化

`config/application.rb`に日本語設定を追加、日本語用のロケールファイルを追加するgemの追加

## 認証

デファクトスタンダード認証gem、deviseを追加して初期セットアップを実行する

## Rspec

テストフレームワークRSpecのセットアップをする

## Haml

テンプレートをhamlに切り替えます

slimやerbと比べて遅いみたいだけど、もうhaml無しではRailsアプリを作れない体になってしまった

## foreman

開発環境の起動を以下のコマンド一発でできるようになる

`foreman start`

Procfileにコマンドを羅列するだけなので理解するもの簡単

## bootstrap

cssフレームワークのbootstrapをセットアップする

開発者の友達bootstrap、バージョンは3です


## 。。。

やる気があれば更新していきたい

## 参考リンク

* [Rails Application Templates — Ruby on Rails Guides](http://guides.rubyonrails.org/rails_application_templates.html){:target="_blank"}

## 関連記事

* [私のモダンなRails環境]({% post_url 2016-03-15-my-modern-rails-environment %})

## 更新履歴

* Templateの更新に合わせて説明を更新
