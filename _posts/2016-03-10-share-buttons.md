---
layout: post
title: JS無しShareボタンの設置
tags: sns blog
update_date: 2016-03-18
---

SNSのshareボタンを設置したいけど、変なjsを読み込みたくない・・・

そこでリンクのみのshareボタンを設置してみた

一応動作はしているみたいだけどどうだろうか

## Twitter

```html
<a href="https://twitter.com/share?text=<記事のタイトル>&amp;hashtags=<タグコンマ区切り>"></a>
```

## はてなブックマーク

```html
<a href="http://b.hatena.ne.jp/add?mode=confirm&amp;url=<記事のURL>&amp;title=<記事のタイトル>"></a>
```

## Pocket

```html
<a href="https://getpocket.com/edit?url=<記事のURL>"></a>
```

## 参考リンク

* [Twitterボタン](https://about.twitter.com/ja/resources/buttons#tweet){:target="_blank"}
* [はてなブックマークボタン](http://b.hatena.ne.jp/guide/bbutton){:target="_blank"}

## 更新履歴

* 2016-03-16 TwitterのURLを修正
* 2016-03-18 PocketのURLを追加
