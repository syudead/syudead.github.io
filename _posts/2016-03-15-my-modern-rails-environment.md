---
layout: post
title: 私のモダンなRails環境
tags: rails
---

最近やたらと1からRailsアプリを作っている。

いい機会なので私が最近構築しているRails環境をここにメモしておく。

## Puma

[http://puma.io/](http://puma.io/){:target="_blank"}

スピードを重視して作られたウェブサーバー

新しめのアプリケーションサーバーソフトの中でも安定していて、しかも早い！

速さは正義である

## Sidekiq

[http://sidekiq.org/](http://sidekiq.org/){:target="_blank"}

スレッドベースのバックグラウンド処理ライブラリ

プロセスベースのResqueと比べて軽量だったり早かったりするが、スレッドセーフを意識しないと痛い目に合う。

バックグラウンド処理にC言語で書かれたライブラリを使う場合は特に注意すべし


## RSpec

[http://rspec.info/](http://rspec.info/){:target="_blank"}

Minitestと対をなす？テストフレームワークの一つ。

Rails開発のコアメンバーの方々からはあんまり好かれていないようだが、自分はRSpecに慣れてしまっているので今更Minitestには乗り換えられない。

## FactoryGirl

[https://github.com/thoughtbot/factory_girl](https://github.com/thoughtbot/factory_girl){:target="_blank"}

fixtures replacement

メンテが大変なyamlファイルによるfixtureをやめて設定ベースのfixtureを導入する。

## Devise

[https://github.com/plataformatec/devise](https://github.com/plataformatec/devise){:target="_blank"}

もはやデファクトスタンダードとなった認証機能を追加してくれるgem

パスワードリマインダーから連続パスワード間違いによるアカウントロック機構まで、これ一つでできちゃいます。

OmniAuthと組み合わせてfacebookやtwitterのSNSログインを実現できます。

## Capistrano

昔ながらのデプロイツール

そろそろ新しく出てきたデプロイツールも試してみたい気もする

## Foreman

[https://github.com/ddollar/foreman](https://github.com/ddollar/foreman){:target="_blank"}

開発環境専用。

Procfileというファイルに開発環境に起動すべきコマンドを羅列しておくことによって開発環境の起動が`foreman start`コマンド1回で済むようになる

solrやsidekiqなどを使用していると地味に便利

## Bootstrap for Sass

[https://github.com/twbs/bootstrap-sass](https://github.com/twbs/bootstrap-sass){:target="_blank"}

レスポンシブなHTMLフレームワークのBootstrapをRailsに簡単に組み込める公式gem

## will_paginate

[https://github.com/mislav/will_paginate](https://github.com/mislav/will_paginate){:target="_blank"}

ページネーションを簡単にシームレスに実現するgem

[will_paginate-bootstrap](https://github.com/bootstrap-ruby/will_paginate-bootstrap)を使えばBootstrap対応の見た目になります

## Gretel

[https://github.com/lassebunk/gretel](https://github.com/lassebunk/gretel){:target="_blank"}

最近知ったパンくずリストを設定／出力するgem

よく考えられていてとても使いやすい。

bootstrap対応

## Quiet Assets

[https://github.com/evrone/quiet_assets](https://github.com/evrone/quiet_assets){:target="_blank"}

開発環境専用。

大量に出るアセットのログを抑止する

たんにそれだけだが、とても便利

## Rails template

せっかくまとめたからtemplate化しようかな・・・
