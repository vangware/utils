# @vangware/micro

![@vangware/micro logo](https://i.imgur.com/qAj2DYK.png)

[![\[NPM Version\]](https://img.shields.io/npm/v/@vangware/micro.svg?style=flat-square)](https://npm.im/@vangware/micro)
[![\[Build Status\]](https://img.shields.io/travis/vangware/micro.svg?style=flat-square)](https://travis-ci.org/vangware/micro)
[![\[Size\]](https://img.shields.io/bundlephobia/minzip/@vangware/micro?label=size&style=flat-square)](https://bundlephobia.com/result?p=@vangware/micro)
[![\[License\]](https://img.shields.io/npm/l/@vangware/micro?style=flat-square)](https://github.com/vangware/micro/blob/master/LICENSE)
[![\[Open Issues\]](https://img.shields.io/github/issues/vangware/micro?style=flat-square)](https://github.com/vangware/micro/issues)
[![\[Coverage\]](https://img.shields.io/coveralls/github/vangware/micro?style=flat-square)](https://coveralls.io/github/vangware/micro)

This library is a collection of utils made entirely in TypeScript. Is the successor of [@vangware/micron](https://github.com/vangware/micron), with less focus on small footprint and higher focus on utility and readability across all JS environments (Node and the browser).

## Installation

You can use `npm`, `pnpm` or `yarn` to install it locally:

```bash
npm i -S @vangware/micro
```

Or you can use it directly as an ESM module trough services like [Pika](https://www.pika.dev/):

```js
import { typeOf } from "https://cdn.pika.dev/@vangware/micro";
```

## Utils

### Array

- **arrayGroup** Groups array elements by grouper function output.
- **arrayInsert** Insert values in given index of array without mutating the target.
- **arrayMap** Secure `Array.prototype.map` for scenarios in which the array could be invalid.
- **arrayReduce** Secure `Array.prototype.reduce` for scenarios in which the array could be invalid.
- **arrayReplace** Replaces values in given index of array without mutating the target.
- **arraySplit** Splits array into an array of arrays of the given length. Can be split both vertically and horizontally.
- **arraySplitFilter** Like `Array.prototype.filter`, but it returns an array of 2 elements `[matching, notMatching]`.

### JSON

- **jsonParse** Secure `JSON.parse` with embedded try/catch (undefined if invalid JSON is given).
- **jsonParsePromise** `JSON.parse` promised.

### Object

- **objectMap** Like `Array.prototype.map`, but for Objects.

### String

- **stringMapReplace** Takes a string an a map of replacements, and returns the resulting string (successor of micron's `mrx`).

### Type checking

- **isArray** Check if given value is an Array.
- **isBigInt** Check if given value is a BigInt.
- **isBoolean** Check if given value is a Boolean.
- **isDate** Check if given value is a Date.
- **isFunction** Check if given value is a Function.
- **isInstanceOf** Check if given value is an instance of the given constructor.
- **isMap** Check if given value is a Map.
- **isNull** Check if given value is null.
- **isNumber** Check if given value is a Number.
- **isObject** Check if given value is an Object (excludes null).
- **isPromise** Check if give value is a Promise.
- **isRegExp** Check if given value is a regular expression.
- **isSet** Check if the given value is a Set.
- **isString** Check if given value is a String.
- **isSymbol** Check if given value is a Symbol.
- **isUndefined** Check if given value is an undefined.
- **isWeakMap** Check if given value is an WeakMap.
- **isWeakSet** Check if given value is an WeakSet.

### Others

- **noop** No Operational function to be used as placeholder.
- **tap** Let's you tap into a value (like logging it or tracking it).
- **tryCatch** Wrapper of `try` / `catch`.
- **when** Wraps a ternary operator, sending truthy or falsy values to a truthyCallback and an optional falsyCallback.
