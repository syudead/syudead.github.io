---
layout: post
title: Github Pagesまとめ
---

[Github](https://github.com){:target="_blank"}というソースコードのホスティングサービスには
Github pageっていうプロジェクトのホームページを作れる機能がある
(公開プロジェクトは無料で作れる)

通常は`<アカウント名>.github.io/<プロジェクト名>`というURLのホームページになるのだが、
プロジェクトの名前を`<アカウント名>.github.io`という名前で作成すると、
サブディレクトリ無しの`<アカウント名>.github.io/`というURLのホームページが作れる

そう、あたかも自分のサーバーでホームページを作成するのと同等のことができるのだ～

全部自分の自由に出来るブログが無料で作れるってすごい

## 前提

1. githubアカウントがある
2. gitコマンドが使える

## ページを作成する

* <アカウント名>.github.io という名前でプロジェクトを作る
* Jekyllで作ったサイトをpushする

## 独自ドメインを設定する

* 取得した独自ドメインのIPアドレスをGithubPages Server IPに設定する

現時点ではIPは以下の通り

* 192.30.252.153
* 192.30.252.154

ドメイン名をCNAMEというファイル名でコミットしてpushする

```
echo "rainyflow.net" > CNAME
```

## Tips

* ページが更新されないときはSettingsのGithub Pagesを見る

エラーがあるときは赤くなっている & エラー情報がメールで送信されている

## 参考リンク

* [Customizing github pages](https://help.github.com/categories/customizing-github-pages/){:target="_blank"}
* [Jekyll公式日本語訳](http://jekyllrb-ja.github.io/){:target="_blank"}
