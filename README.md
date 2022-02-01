# stopword
`stopword` is a module for node and the browser that allows you to strip
stopwords from an input text. [In natural language processing, "Stopwords" are
words that are so frequent that they can safely be removed from a text without
altering its meaning.](https://en.wikipedia.org/wiki/Stop_words)

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![JavaScript Style Guide][standardjs-image]][standardjs-url]
[![MIT License][license-image]][license-url]

![wonderful day stopword module](./demo/stopword-demo.gif)

Live [stopword browser demo](http://fergiemcdowall.github.io/stopword/demo/).

## Usage

### Node.js
```javascript
sw = require('stopword')
// sw.removeStopwords and sw.[language code] now available
```

### Script tag method
```html
<script src="stopword.js"></script>

<script>
// sw.removeStopwords and sw.[language code] now available
</script>
```


### Default (English)
By default, `stopword` will strip an array of "meaningless" English words

```javascript
sw = require('stopword')
const oldString = 'a really Interesting string with some words'.split(' ')
const newString = sw.removeStopwords(oldString)
// newString is now [ 'really', 'Interesting', 'string', 'words' ]

```

### Other languages
You can also specify a language other than English:
```javascript
sw = require('stopword')
const oldString = 'Trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna åäö'.split(' ')
// sw.sv contains swedish stopwords
const newString = sw.removeStopwords(oldString, sw.sv)
// newString is now [ 'Trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna', 'åäö' ]
```

### Custom list of stopwords
And last, but not least, it is possible to use your own, custom list of stopwords:
```javascript
sw = require('stopword')
const oldString = 'you can even roll your own custom stopword list'.split(' ')
// Just add your own list/array of stopwords
const newString = sw.removeStopwords(oldString, [ 'even', 'a', 'custom', 'stopword', 'list', 'is', 'possible']
// newString is now [ 'you', 'can', 'roll', 'your', 'own']
```

### Removing stopwords for i.e. two languages and a custom stopword list
With spread syntax you can easily combine several stopword arrays into one. Useful for situations where two langauages are used interchangeably. Or when you have certain words that are used in every document that is not in your existing stopword arrays.
```javascript
sw = require('stopword')
const oldString = 'a really interesting string with some words trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna'.split(' ')
const customStopwords = ['interesting', 'really']
const newString = sw.removeStopwords(oldString, [...sw.en, ...sw.sv, ...customStopwords]
// newString is now ['string', 'words', 'trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna']
```



## API

### removeStopwords

Returns an Array that represents the text with the specified stopwords removed.

* `text` An array of words
* `stopwords` An array of stopwords

```javascript
sw = require('stopword')
var text = sw.removeStopwords(text[, stopwords])
// text is now an array of given words minus specified stopwords
```

### &lt;language code&gt;

Language codes follow [ISO 639-3 Language Code list](https://iso639-3.sil.org/code_tables/639/data) and using the bibliographic (B) versions. Arrays of stopwords for the following 57 languages are supplied:

* `afr` - Afrikaans
* `ara` - Arabic, Macrolanguage
* `hye` - Armenian
* `eus` - Basque
* `ben` - Bengali
* `bre` - Breton
* `bul` - Bulgarian
* `cat` - Catalan, Valencian 
* `zho` - Chinese, Macrolanguage
* `hrv` - Croatian
* `ces` - Czech
* `dan` - Danish
* `nld` - Dutch
* `eng` - English
* `epo` - Esperanto
* `est` - Estonian, Macrolanguage
* `fin` - Finnish
* `fra` - French
* `glg` - Galician
* `deu` - German
* `ell` - Greek, Modern
* `hau` - Hausa
* `heb` - Hebrew
* `hin` - Hindi
* `hun` - Hungarian
* `ind` - Indonesian
* `gle` - Irish
* `ita` - Italian
* `jpn` - Japanese
* `kor` - Korean
* `lat` - Latin
* `lav` - Latvian, Macrolanguage
* `lgg` - Lugbara (without diacritics)
* `lggo` - Lugbara official (with diacritics)
* `mr` - Marathi
* `my` - Myanmar
* `no` - Norwegian
* `per` - Persian/ Farsi
* `pl` - Polish
* `pt` - Portuguese
* `ptbr` - Portuguese (Brazilian)
* `pa` - Punjabi Gurmukhi
* `ro` - Romanian
* `ru` - Russian
* `sk` - Slovak
* `sl` - Slovenian
* `so` - Somali
* `st` - Sotho
* `es` - Spanish
* `sw` - Swahili
* `sv` - Swedish
* `th` - Thai
* `tl` - Tagalog (Filipino)
* `tr` - Turkish
* `ur` - Urdu
* `vi` - Vietnamese
* `yo` - Yoruba
* `zu` - Zulu

```javascript
sw = require('stopword')
norwegianStopwords = sw.no
// norwegianStopwords now contains an Array of norwgian stopwords
```

#### Languages with no space between words
`ja` Japanese, `th` Thai and `zh` Chinese Simplified and some of the other languages supported have no space between words. For these languages you need to split the text into an array of words in another way than just `textString.split(' ')`. You can check out [TinySegmenter](http://chasen.org/%7Etaku/software/TinySegmenter/) for Japanese and [chinese-tokenizer](https://github.com/yishn/chinese-tokenizer) for Chinese.

## Your language missing?
If you can't find a stopword file for your language, you can try creating one with [`stopword-trainer`](https://github.com/eklem/stopword-trainer). We're happy to help you in the process.

## Contributions and licenses
Most of this work is from other projects and people, and wouldn't be possible without them. Thanks to among others the [stopwords-iso](https://github.com/stopwords-iso) project and the [more-stoplist](https://github.com/dohliam/more-stoplists) project. And thanks for all your code input: @arthurdenner, @micalevisk, @fabric-io-rodrigues, @behzadmoradi, @guysaar223, @ConnorKrammer, @GreXLin85, @nanopx, @virtual and @JustroX!

[Licenses](./dist/LICENSES.txt) for both this and all third party code.

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/stopword
[npm-version-image]: http://img.shields.io/npm/v/stopword.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/stopword.svg?style=flat
[travis-url]: http://travis-ci.org/fergiemcdowall/stopword
[travis-image]: http://img.shields.io/travis/fergiemcdowall/stopword.svg?style=flat
[standardjs-url]: https://standardjs.com
[standardjs-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
