require 'sinatra'
require 'mecab'

get '/' do
  str = "我々宇宙人は地球を侵略しに来ました。"
  tagger = MeCab::Tagger.new
  "#{tagger.parse(str)}"
end
