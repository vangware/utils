# @vangware/micro

![@vangware/micro logo](https://i.imgur.com/qAj2DYK.png)

[![\[NPM Version\]](https://img.shields.io/npm/v/@vangware/micro.svg?style=flat-square)](https://npm.im/@vangware/micro)
[![\[Build Status\]](https://img.shields.io/travis/vangware/micro.svg?style=flat-square)](https://travis-ci.org/vangware/micro)

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
- **arrayReplace** Replaces values in given index of array without mutating the target.
- **arraySplitFilter** Like `Array.prototype.filter`, but it returns an array of 2 elements `[matching, notMatching]`.

### JSON

- **jsonParse** Secure `JSON.parse` with embedded try/catch (undefined if invalid JSON is given).
- **jsonParsePromise** `JSON.parse` promised.

### Object

- **objectMap** Like `Array.prototype.map`, but for Objects.

### String

- **stringMapReplace** Takes a string an a map of replacements, and returns the resulting string (successor of micron's `mrx`).

### Others

- **noop** No Operational function to be used as placeholder.
- **tap** Let's you tap into a value (like logging it or tracking it).
- **tryCatch** Wrapper of `try` / `catch`.
- **typeOf** Takes a value and returns an object with several getters to check the type of the value.
- **when** Wraps a ternary operator, sending truthy or falsy values to a truthyCallback and an optional falsyCallback.
