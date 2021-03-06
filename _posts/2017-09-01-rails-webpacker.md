---
layout: post
title: Rails 5.1のwebpackerでReact環境を構築する
tags: rails ruby
---

![Rails and React](/images/react_rails.png){:class="responsive-img"}

## 環境

* OS: Ubuntu 14.04.3 LTS
* Rails 5.1.0
* Ruby 2.4.1
* webpacker 2.0

Rails 5.1のwebpacker gemを使用してReact環境を構築しようとして調べてみると、Rails 5.0時代と思われる記述ややたら面倒な手順などが紹介されていたため、

ここに最短で既存のRailsアプリにReact環境を構築するための手順を残しておく

## yarn

[公式](https://yarnpkg.com/en/docs/install#linux-tab){:target="_blank"}に書いてある実行手順をそのまま実行する

尚、Rails 5.1でyarnをinstallしないままassetのprecompileを実行すると激しく遅かったため、webpackerを使用するしないに関わらずyarnは導入したほうがよさそうだ

```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

## npm

色々な導入方法があってイマイチ情報が錯綜している感があるが、今回はnodesourceを利用してインストール

```sh
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## react

Railsコマンド経由でinstall

```sh
rails webpacker:install
rails webpacker:install:react
```

## webpack-dev-server

開発環境でjavascriptのライブリロードを実現するためにwebpack-dev-serverを導入します

これは単に`./bin/webpack-dev-server`を実行するだけですが、`rails s`と別の画面で実行しなければならず、面倒なためforemanを使用して同時に実行できるようにします

```sh
# Procfile
webpack: ./bin/webpack-dev-server
```



## 参考リンク

* [yarnpkg.com](https://yarnpkg.com/en/docs/install#linux-tab){:target="_blank"}
* [nodesource](https://github.com/nodesource/distributions){:target="_blank"}
* [foreman](https://github.com/ddollar/foreman){:target="_blank"}

## 更新履歴

* 2017-09-02 webpack-dev-serverの記述を追加
* 2018-01-06 誤字修正
