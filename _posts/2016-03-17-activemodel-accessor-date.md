---
layout: post
title: ActiveRecordのaccessorで時間を扱う
tags: rails ruby
---

## 環境

* Rails 4.2.6
* Ruby 2.2.4

## 一時的な値を格納するのに便利なActiveRecordのattr_accessor

データベースに保存しない値だけど、フォームから入力させたい場合にrubyのattr_accessorを使って擬似的にカラムを追加すると便利だ

```ruby
class User < ActiveRecord::Base
  attr_accessor :tmp_string
  
  validates :tmp_string, presence: true
end
```

簡単に実装できるうえにちゃんとバリデーションも効いてくれるため、たびたび使っている

フォームも通常通り書くだけで問題なく動作してくれる

```haml
= form_for @user do |f|
  = f.text_field :name
  = f.text_field :tmp_string # 一時的な値
```

## 時間を扱おうとすると・・・

そんな便利なActiveRecordのattr_accessorだが、時間のフィールドを同様の方法で扱おうとすると問題が発生する

```ruby
class User < ActiveRecord::Base
  attr_accessor :tmp_date # 一時的に日時を格納する！
  
  validates :tmp_date, presence: true
end
```

```haml
= form_for @user do |f|
  = f.text_field :name
  = f.date_select :tmp_date # 一時的な値
```

フォームをsubmitすると突如発生する謎のエラー

```
/app/views/users/_form.html.erb where line #18 raised:
  undefined method `day' for {1=>2016, 2=>3, 3=>16}:Hash
```

## 原因と対策

ActiveRecordのdateカラムはformから値を入力してpostすると以下のような形式で送信される

```
"tmp_date(1i)"=>"2016", "tmp_date(2i)"=>"3", "tmp_date(3i)"=>"16"
```

この謎形式のパラメータをdateオブジェクトに直して格納してくれているのが[MultiparameterAttribute](http://apidock.com/rails/ActiveRecord/AttributeAssignment/MultiparameterAttribute){:target="_blank"}だ

```ruby
class MultiparameterAttribute #:nodoc:
  attr_reader :object, :name, :values, :cast_type

  def initialize(object, name, values)
    @object = object
    @name   = name
    @values = values
  end

  def read_value
    return if values.values.compact.empty?

    @cast_type = object.type_for_attribute(name)
    klass = cast_type.klass

    if klass == Time
      read_time
    elsif klass == Date
      read_date
    else
      read_other
    end
  end
```

どうもdateやdatetimeのような複数のフィールドの値を1つのカラムに格納するような形式のパラメータは、このMultiparameterAttributeクラスの働きによりうまく動作しているようだ

しかし、このクラスをそのまま使おうとしてもDBに依存したりしている部分があり、あまりうまくいかなかったため MultiparameterAttribute のソースコードを一部拝借して以下のようすればひとまず問題なく動くようだ

```ruby
class User < ActiveRecord::Base
  attr_accessor :tmp_date # 一時的に日時を格納する！
  
  validates :tmp_date, presence: true

  # @override
  def tmp_date=(input)
    case input
    when String
      @tmp_date = Date.parse(input)
    when Hash
      @tmp_date = read_date(input)
    end
  end

  def read_date(values)
    return if (1..3).any? { |position| values[position].blank? }
    set_values = values.values_at(1,2,3)
    begin
      Date.new(*set_values)
    rescue ArgumentError # if Date.new raises an exception on an invalid date
      nil
    end
  end
end

```

## 参考リンク

* [MultiparameterAttribute](http://apidock.com/rails/ActiveRecord/AttributeAssignment/MultiparameterAttribute){:target="_blank"}
