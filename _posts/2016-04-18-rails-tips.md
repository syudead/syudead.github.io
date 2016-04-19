---
title: Railsの罠
layout: post
tags: rails
---

Railsは素晴らしいフレームワークだが、それでも躓きやすい点や失敗しやすいポイントがある

思いつく限りここにそのポイントを書いておく

2016/04/20 説明を追加

* TOC
{:toc}

## gemsのバージョンは固定しよう

gemはマイナーバージョンの変更といえどもアプリケーション全体に影響を与える場合がある、特別な理由が無い場合は使用するgemのバージョンはGemfileに書いて固定しておこう

## default_scopeは使わない

Railsで開発をしたことのある人が高確率で遭遇する罠

default_scopeは設定しやすいが、一旦設定してしまうとdefault_scope無しのクエリがとても書きにくい

よほど絶対に外さない設定でない限り、default_scopeではなく通常のscopeを使おう

## has_many + fields_for は茨の道

fields_forはうまく使うとコードの記述量が減って便利なのだが、has_manyやhas_many throughなリレーションに対して使おうとすると途端に複雑になる

複雑になりそうな場合はfields_forを使わずに書くことを考えよう

## accepts_nested_attributes_forを使いすぎない

## has_many throughリレーションをassign_attributesするとその時点でinsertされる

基点となるモデルが保存済みの場合、has_many throughリレーションを代入すると即座にinsertが走る

validationしたいなどの理由によりrollbackする必要がある場合にはtrunsactionを使う必要がある


## text_area + hidden_fieldの組み合わせは改行の扱いに注意

これはRails固有の問題ではないが、text_areaで入力した文字列を確認画面などでhidden_fieldにいれて引き回す場合、改行の前に空白が挿入されてしまう

テンプレート言語にhamlを使用している場合はperserveヘルパーを使用することで簡単に対処可能だ

```haml
= perserve f.hidden_field :body
```

## sidekiqを使うときはスレッドセーフを意識する

Railsでバックグラウンド処理を導入するときに大体の人はresqueかsidekiqを選ぶと思うが、resqueがプロセスモデルなのに対してsidekiqはスレッドモデルであることを忘れてはならない

通常のrubyの処理を書く分にはあまり問題にはならないが、native extensionsと呼ばれるいわゆるC言語などで書かれたgemを使用する場合はスレッドセーフを意識する必要がある

バックグラウンド処理内で使用するgemがスレッドセーフではない場合、 謎のバグを引き起こす原因となる

一応対策としてはworkerの数を1にしたりすることで場当たり的な対処は可能だが、スレッドセーフが保障されていない場合はresqueを使用するのが無難だろう

特にRMagickとかRMagickとか・・・
