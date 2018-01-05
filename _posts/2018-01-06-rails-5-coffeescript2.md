---
layout: post
title: Rails 5.1のwebpackerでCoffeeScript2を使う
tags: rails ruby
---

[![Rails5 and coffeescript2](/images/coffee.png){:class="responsive-img"}]({% post_url 2018-01-06-rails-5-coffeescript2 %})

Rails 5のwebpacker環境で開発をしているとcoffeescriptを使いたくなるのがRails使いの性というものです

特にCoffeeScript2からはjsxにも対応しており、reactを使用するうえで有用に見えます

この記事ではrails5.1 + webpacker + react + coffeescript2 での環境構築手順を記載しています

## 環境

* OS: Ubuntu 14.04.3 LTS
* Rails 5.1.0
* Ruby 2.4.1
* webpacker 3.2.0
* coffeescript 2.2.1


## 注意

webpackerは現在高速で開発が進んでおり、導入手順を探してもちょっとしたバージョン違い等が原因でうまく動作しなかったりします

ここに書き残しておくのはwebpacker 3.2 + coffeescript 2.2.1の組み合わせの場合の導入方法です


## 手順1:通常通りにwebpacker, react, coffeescriptを導入

```sh
rails webpacker:install
rails webpacker:install:react
rails webpacker:install:coffee
```

## 手順2:coffeescript2をpackage.jsonに追加してinstall

coffee-loaderは0.9以上でcoffeescript2に対応しているそうです

```json
// package.json
-    "coffee-loader": "^0.8.0",
-    "coffee-script": "^1.12.7",
+    "coffee-loader": "^0.9.0",
+    "coffeescript": "2.2.1",
```

```sh
$ yarn install
```

## 手順３：coffeescriptのcompile設定を変更する

`config/webpack/environment.js`でcoffeescriptファイルの設定を変更します

```js
// config/webpack/environment.js
const { environment } = require('@rails/webpacker')

const babel = environment.loaders.get('babel')

environment.loaders.insert('coffee', {
  test: /\.coffee(\.erb)?$/,
  use: babel.use.concat(['coffee-loader'])
})

module.exports = environment
```


## 参考リンク

* [github.com/rails/webpacker](https://github.com/rails/webpacker/blob/master/docs/webpack.md#coffeescript-2){:target="_blank"}

## 更新履歴

* XXXX-XX-XX 
