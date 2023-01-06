<img alt="Vangware's Utils" src="./logo.svg" height="192" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

⚒️ [Vangware][vangware] curried functional utils.

Collection of [curried][currying] [functional][functional-programming] utils
made entirely in [TypeScript][typescript]. Compatible with all modern JS
environments:

-   📦 [Node.js][nodejs].
-   🦕 [Deno][deno].
-   🌎 Browsers (Chrome, Firefox, Edge, and so on).

## Usage

This package can be installed as a dependency or used directly.

### Usage as ECMAScript module

In JS or [Deno][deno]:

```js
import { tap } from "https://esm.sh/@vangware/utils";
```

Or in HTML:

```html
<script type="module">
	import { tap } from "https://esm.sh/@vangware/utils";
</script>
```

### Usage with local installation

First:

```bash
npm i @vangware/utils
```

And then:

```js
import { tap } from "@vangware/utils";
```

## Documentation

Documentation can be found [HERE][documentation]. It is auto-generated with
[typedoc][typedoc] based on the JSDocs and the types in the source. Shouldn't be
necessary to read this, code editors like [VS Code][vscode] integrate the
documentation in the UI.

## Changelog

Changelog can be found [HERE][changelog].

## Test coverage

Test coverage can be found [HERE][coverage].

<!-- Reference -->

[changelog]: https://github.com/vangware/utils/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/utils.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/utils
[coverage]: https://coveralls.io/github/vangware/utils
[currying]: https://en.wikipedia.org/wiki/Currying
[deno]: https://deno.land/
[documentation]: https://utils.vangware.com
[functional-programming]: https://en.wikipedia.org/wiki/Functional_programming
[license-badge]:
	https://img.shields.io/npm/l/@vangware/utils.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/utils/blob/main/LICENSE
[nodejs]: https://nodejs.org/
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/utils.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/utils
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/utils.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/utils/issues
[typedoc]: https://typedoc.org/
[typescript]: https://typescriptlang.org/
[vangware]: https://vangware.com
[vscode]: https://code.visualstudio.com/
