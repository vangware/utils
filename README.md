> This repository's code was moved to [lou.codes](https://lou.codes).

---

<img id="logo" alt="Utils by Vangware" src="./logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

⚒️ [Vangware][vangware] [TypeScript][typescript] [curried][currying]
[functional][functional-programming] utils.

## Usage

### 📦 Node

Install `@vangware/utils` as a dependency:

```bash
pnpm add @vangware/utils
# or
npm install @vangware/utils
# or
yarn add @vangware/utils
```

Import it and use it:

```typescript
import { get } from "@vangware/utils";

get("foo")({ foo: "bar" }); // "bar"
```

### 🦕 Deno

Import `@vangware/utils` using the `npm:` prefix, and use it directly:

```typescript
import { get } from "npm:@vangware/utils";

get("foo")({ foo: "bar" }); // "bar"
```

### 🌎 Browser

Import `@vangware/utils` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { get } from "https://esm.sh/@vangware/utils";

	get("foo")({ foo: "bar" }); // "bar"
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]: https://github.com/vangware/utils/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/utils.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/utils
[coverage]: https://coveralls.io/github/vangware/utils
[currying]: https://en.wikipedia.org/wiki/Currying
[documentation]: https://utils.vangware.com
[esm.sh]: https://esm.sh
[functional-programming]: https://en.wikipedia.org/wiki/Functional_programming
[license-badge]:
	https://img.shields.io/npm/l/@vangware/utils.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/utils/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/utils.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/utils
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/utils.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/utils/issues
[typescript]: https://typescriptlang.org/
[vangware]: https://vangware.com
