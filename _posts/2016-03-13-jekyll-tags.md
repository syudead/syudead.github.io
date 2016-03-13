---
layout: post
title: Jekyllのブログでタグ機能を実装する
tags: jekyll blog
---

Github Pages上のJekyllブログで記事へのタグ付けおよびタグ一覧ページを作成したい
公式ページなどを見てもあまりスマートなやり方が載っていなかったので、ここに書き残しておく。

## 設定

記事へのタグ設定は公式ページなどに書いてある通り、それぞれの記事の先頭に以下のように書くことで簡単にできる。

```yaml
title: 記事のタイトル
tags: jekyll blog
```

または

```yaml
title: 記事のタイトル
tags:
  - jekyll
  - blog
```

## 一覧ページ

Pageとして作成する。愚直に全記事ループして設定されてあるタグを抽出して並べる。

```liquid
{% raw %}
{%for post in site.posts %}
  {% if post.tags contains page.tag %}
    <li><span>{{ post.date | date:"%Y-%m-%d" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endif %}
{% endfor %}
{% endraw %}
```

## サイドバーへの表示

他にもっといいやり方がある気がするが、`_data`ディレクトリに以下のようなデータファイルを作ってループで回している。

```yaml
-
  name: github-pages
  title: Github Pages
-
  name: blog
  title: Blog
-
  name: sns
  title: SNS
```

サイドバー

```liquid
{% raw %}
<h2>Tags</h2>
<div class="collection">
  {% for tag in site.data.tags %}
  <a href="/{{ tag.name }}.html" class="collection-item">{{ tag.title }}</a>
  {% endfor %}
</div>
{% endraw %}
```

## 参考リンク

* [Jekyllのコードを記事内に表示させる方法](http://stackoverflow.com/questions/3426182/how-to-escape-liquid-template-tags){:target="_blank"}
* [Jekyll archive page (without plugins)](http://reyhan.org/2013/03/jekyll-archive-without-plugins.html){:target="_blank"}
* [Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers){:target="_blank"}
