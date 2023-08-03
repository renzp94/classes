# @renzp/classes

条件式生成class字符串

## Install

```sh
npm i @renzp/classes
```

## Usage

```js
import classes from '@renzp/classes'

// 纯文本
classes('hello') // => "hello"
// 对象
classes({ hello: true, word: false }) // "hello"
// 数组
classes(['hello', 'word']) // "hello word"
// 对象数组
classes(['hello', { word: true }]) // "hello word"
```
