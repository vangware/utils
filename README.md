![@vangware/micro](https://i.imgur.com/nGVEORZ.png)

![NPM Version](https://img.shields.io/npm/v/@vangware/micro.svg?style=flat-square)
![Size](https://img.shields.io/bundlephobia/minzip/@vangware/micro?label=size&style=flat-square)
![License](https://img.shields.io/npm/l/@vangware/micro?style=flat-square)
![Build Status](https://img.shields.io/travis/vangware/micro.svg?style=flat-square)
![Coverage](https://img.shields.io/coveralls/github/vangware/micro?style=flat-square)
![Open Issues](https://img.shields.io/github/issues/vangware/micro?style=flat-square)

Collection of [curried](https://en.wikipedia.org/wiki/Currying) [functional](https://en.wikipedia.org/wiki/Functional_programming) utils made entirely in [TypeScript](http://typescriptlang.org/). Compatible with all modern JS environments:
- 📦 [Node.js](https://nodejs.org/).
- 🦕 [Deno](https://deno.land/).
- 🌎 Browsers (Chrome, Firefox, Edge, and so on).

## Usage

This package can be installed as a dependency or used directly.

### Usage as ECMAScript module

In JS or [deno](https://deno.land/):

```js
import { isObject } from "http://cdn.pika.dev/@vangware/micro";
```

Or in HTML:

```html
<script type="module" src="http://cdn.pika.dev/@vangware/micro"></script>
```

### Usage with local installation

First:

```bash
npm i -S @vangware/micro
# or
pnpm i -S @vangware/micro
# or
yarn add @vangware/micro
```

And then:

```js
import { isObject } from "@vangware/micro";
```

## Documentation

Documentation can be found [HERE](https://micro.vangware.com). It is auto-generated with [typedoc](https://typedoc.org/) based on the JSDocs and the types in the source. Shouldn't be necessary to read this, code editors like [VSCode](https://code.visualstudio.com/) integrate the documentation in the UI.

## Changelog

Changelog can be found [HERE](https://github.com/vangware/micro/blob/master/CHANGELOG.md).

## Test coverage

Test coverage can be found [HERE](https://coveralls.io/github/vangware/micro).
