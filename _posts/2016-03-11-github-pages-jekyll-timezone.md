---
layout: post
title: Github Pagesに記事が反映されない
tags:
  - github-pages
  - jekyll
  - blog
---

日付境界付近に設定した記事が生成されていないので、ためしにTime Zoneを設定してみる

```yaml
timezone: Asia/Tokyo
```

何を言っているのかというと、2016/03/10という日付設定をした記事を2016/03/10になったばっかりの時間にGithubにpushしても記事が生成されないのだ。

Jekyllには未来の日付の記事を生成しないという機能があるようなので、GithubがHTMLを生成する際にGithub側のTime Zone(つまりアメリカ)にしたがって未来判定を行っているのではないかという予想。

* 日本のTime Zone: +9
* アメリカのTime Zone: -6 ～-10

## うまくいった

上記設定をしたら日付境界付近でもすぐに反映されたので、やはりTime Zone設定が無いせいだったのだろうか
