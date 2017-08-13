---
layout: post
title: ページがモバイルフレンドリーではありません
tags: blog
---

![ページがモバイルフレンドリーではありません](/images/Screenshot_2016-09-04-21-13-47.jpg){:class="responsive-img"}

スマホでこのブログを見ようとしたらGoogleから
「ページがモバイルフレンドリーではありません」
と言われてしまっていた・・・

原因はviewportの指定を入れ忘れていたため。

```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```

このコードをheadに入れて暫くしたら指摘が消えた
