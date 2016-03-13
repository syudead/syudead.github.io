---
layout: post
title: JS無しShareボタンの設置
categories: sns blog
---

SNSのshareボタンを設置したいけど、変なjsを読み込みたくない・・・

そこでリンクのみのshareボタンを設置してみた

一応動作はしているみたいだけどどうだろうか

## twitter

```html
<a href="https://twitter.com/share" data-via="<twitterのユーザーID>"></a>
```

## はてなブックマーク

```html
<a href="http://b.hatena.ne.jp/add?mode=confirm&amp;url=<記事のURL>&amp;title=<記事のタイトル>"></a>
```

## 参考リンク

* [Twitterボタン](https://about.twitter.com/ja/resources/buttons#tweet)
* [はてなブックマークボタン](http://b.hatena.ne.jp/guide/bbutton)
