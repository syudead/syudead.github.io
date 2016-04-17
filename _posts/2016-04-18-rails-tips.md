---
title: Railsの罠
layout: post
tags: rails
---

Railsは素晴らしいフレームワークだが、それでも躓きやすい点や失敗しやすいポイントがある

思いつく限りここにそのポイントを書いておく

* gemsのバージョンは固定しよう
* default_scopeは使わない
* has_many + fields_for は茨の道
* accepts_nested_attributes_forを使いすぎない
* text_area + hidden_fieldの組み合わせは改行の扱いに注意
* sidekiqを使うときはスレッドセーフを意識する
