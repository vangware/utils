# Change log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/).
This project uses [Gitmoji](https://gitmoji.carloscuesta.me/)

## 4.2.0

- :sparkles: add `equal` utils.

## 4.1.0

- :building_construction: improve types `isObject`.
- :arrow_up: dependency upgrade.

## 4.0.1

- :arrow_up: dependency upgrade.

## 4.0.0

- :arrow_up: major dependency upgrade (new TS version!).
- :building_construction: improve tuples making use of the new TS feature.
- :fire: remove `Tuple` type.
- :art: logo update.

## 3.1.1

- :arrow_up: dependency upgrade.
- :memo: update README.md.

## 3.1.0

- :arrow_up: dependency upgrade.
- :sparkles: add new `objectMap` util.

## 3.0.2

- :arrow_up: dependency upgrade.

## 3.0.1

- :arrow_up: dependency upgrade.

## 3.0.0

- :arrow_up: dependency upgrade
- :boom: change types of filter functions to use `is`.
- :boom: change order of params for `arrayInsert` util.
- :boom: change order of params for `arrayReplace` util.
- :sparkles: add new `arrayReplaceFirst` util.
- :sparkles: add new `arrayReplaceLast` util.
- :sparkles: add new `isFalsy` util.
- :sparkles: add new `isTruthy` util.
- :sparkles: add new `numberFloatToDecimalTuple` util (internal usage mainly).
- :sparkles: add new `numberWithExponentToDecimalTuple` util (internal usage mainly).
- :sparkles: add new `stringParseDecimal` util.
- :sparkles: add new `stringParseHexadecimal` util.
- :sparkles: add new `stringParseNumber` util.
- :building_construction: improve internals of `numberToDecimalTuple`.


## 2.1.5

- :arrow_up: dependency upgrade.
- :white_check_mark: update tests to use `@vangware/test`.

## 2.1.4

- :arrow_up: dependency upgrade.
- :bug: fix order of `decimalTupleAdd` and `numberAdd` (minor because is an addition).

## 2.1.3

- :bug: fix `numberToDecimalTuple` parsing error with 0.
- :white_check_mark: add tests for those scenarios.

## 2.1.2

- :bug: fix `numberToDecimalTuple` parsing error with numbers that had exponent.
- :white_check_mark: add tests for those scenarios.

## 2.1.1

- :bug: fix `numberToDecimalTuple` parsing error.

## 2.1.0

- :sparkles: add new `DecimalTuple` type to represent decimal numbers with two integers.
- :sparkles: add new `decimalTupleAdd` util.
- :sparkles: add new `decimalTupleDivide` util.
- :sparkles: add new `decimalTupleMultiply` util.
- :sparkles: add new `decimalTupleSubtract` util.
- :sparkles: add new `decimalTupleToNumber` util.
- :sparkles: add new `numberToDecimalTuple` util.
- :sparkles: add new `numberAdd` util (0.1 + 0.2 returns 0.3 :mage:).
- :sparkles: add new `numberDivide` util.
- :sparkles: add new `numberMultiply` util.
- :sparkles: add new `numberSubtract` util.
- :arrow_up: dependency upgrade.

## 2.0.1

- :truck: moved all tests to tests directory.
- :building_construction: change `ava` with `uvu`.
- :building_construction: change `nyc` with `c8`.
- :heavy_minus_sign: remove `ava`.
- :heavy_minus_sign: remove `nyc`.
- :fire: removed `test:watch` because it doesn't make any sense with the speed of `uvu`.
- :wrench: update travis config.

## 2.0.0

- :truck: rename `arrayPush` to `arrayInsertLast`.
- :truck: rename `arrayUnshift` to `arrayInsertFirst`.
- :sparkles: add new `arraySliceFrom` util.
- :sparkles: add new `arraySliceTo` util.
- :sparkles: add new `Falsy` type.
- :sparkles: add new `Truthy` type.
- :pencil2: fix some docs examples.
- :bookmark: major change because of the above mentioned renames.
- :building_construction: better imports.
- :arrow_up: dependency upgrade.

## 1.1.0

- :sparkles: add new `Sorter` type.
- :sparkles: add new `arraySort` util.
- :bug: fix bad diff output of tests.
- :arrow_up: dependency upgrade.

## 1.0.1

- :arrow_up: dependency upgrade.
- :memo: update README.md badges.

## 1.0.0

- :truck: rename package from `@vangware/micro` to `@vangware/utils`.
- :bookmark: version reset due to name change.
- :arrow_up: dependency upgrade.
- :memo: updated `README.md`.
- :building_construction: better type inference.

## 8.1.2 (deprecated @vangware/micro)

- :arrow_up: yet another dependency upgrade.

## 8.1.1 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.

## 8.1.0 (deprecated @vangware/micro)

- :fire: remove `exports` from `package.json`.

## 8.0.0 (deprecated @vangware/micro)

- :truck: rename all utils to avoid reserved words clashing (now the internal API resembles the external)
- :bookmark: major version bump.
- :building_construction: removed typed imports/exports until bundlers work better.
- :building_construction: better `package.json` exports.
- :building_construction: imports/exports now include `.js` extension (more ESM friendly).

## 7.2.0 (deprecated @vangware/micro)

- :bug: broken `from` util. Renamed it to `toArray`.
- :bookmark: version bump.

## 7.1.3 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :wrench: update tsconfig.

## 7.1.2 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 7.1.1 (deprecated @vangware/micro)

- :pencil2: fix wrong docs in instanceOf.
- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :memo: update docs (they still suck because they are using internal names instead of exported and they don't handle curried functions that well...).

## 7.1.0 (deprecated @vangware/micro)

- :sparkles: add stringReverse util.
- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 7.0.0 (deprecated @vangware/micro)

- :bookmark: major version bump.
- :building_construction: change architecture to have utils in directories.
- :truck: rename all utils to avoid redundance based on directories.
- :building_construction: add defaults back.
- :sparkles: add `array/from`.
- :sparkles: add `json/stringifyPromise`.
- :sparkles: add `object/fromEntries`.
- :fire: remove object freezing (types will keep being readonly, but not in runtime).
- :arrow_up: dependency upgrade.

## 6.0.6 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :lock: fix small security concern in `arrayFilterIn` and `arrayMap`.

## 6.0.5 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.

## 6.0.4 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.

## 6.0.3 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.

## 6.0.2 (deprecated @vangware/micro)

- :sparkles: add Entity type.
- :building_construction: change exports to include types.

## 6.0.1 (deprecated @vangware/micro)

- :bug: fix mixing exports in index.

## 6.0.0 (deprecated @vangware/micro)

- :bookmark: major version bump.
- :arrow_up: dependency upgrade.
- :sparkles: add arrayFilterIn.
- :sparkles: add arrayFilterOut.
- :sparkles: add arrayUnshift.
- :sparkles: add functionNot.
- :sparkles: add isType.
- :sparkles: add numberBetween
- :sparkles: add numberBoundary
- :building_construction: change everything to curried.
- :building_construction: change folder structure.
- :building_construction: change the way tests are done (inspired by RITEway).
- :building_construction: change to named exports only.
- :bulb: new documentation with examples for everything.
- :memo: updated README.md.
- :fire: remove arrayFilter (separated int `arrayFilterIn` and `arrayFilterOut`).
- :fire: remove constants.
- :fire: remove tap (use function in place).
- :fire: remove when (use ternaries instead).

## 5.2.1 (deprecated @vangware/micro)

- :bento: Update logo.
- :sparkles: Added favicon.

## 5.2.0 (deprecated @vangware/micro)

- :bookmark: version bump.
- :arrow_up: dependency upgrade.

## 5.1.0 (deprecated @vangware/micro)

- :bookmark: version bump.
- :building_construction: change exports/imports to use import type/export type when needed.

## 5.0.6 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :building_construction: change code matching new linting settings.

## 5.0.5 (deprecated @vangware/micro)

- :arrow_up: version bump.
- :sparkles: export time constants.

## 5.0.4 (deprecated @vangware/micro)

- :wrench: update travis config.
- :arrow_up: version bump.
- :sparkles: add time constants.

## 5.0.3 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :wrench: update ava config.

## 5.0.2 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :memo: update docs.

## 5.0.1 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 5.0.0 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :building_construction: update `arrayFilter` to avoid mutations even further.
- :building_construction: update `arrayFilterTuple` to avoid mutations even further.
- :building_construction: update `arrayGroup` to avoid mutations even further.
- :building_construction: update `arrayInsert` to avoid mutations even further.
- :building_construction: update `arrayMap` to avoid mutations even further.
- :building_construction: update `arrayReduce` to avoid mutations even further.
- :building_construction: update `arrayReplace` to avoid mutations even further.
- :building_construction: update `arraySlice` to avoid mutations even further.
- :building_construction: update `arraySplit` to avoid mutations even further.
- :building_construction: update `objectCreate` to be use a base besides the prototype.
- :building_construction: update `objectEntries` to avoid mutations even further.
- :sparkles: add `objectFreeze` to be used by everything.

## 4.0.5 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :building_construction: arrayFilterTuple doesn't use `arrayReduce` anymore.
- :building_construction: objectMap now uses `objectEntries`.
- :memo: update docs.
- :page_facing_up: update license year.
- :sparkles: add arrayFilter.
- :sparkles: add arraySlice.
- :sparkles: add objectCreate.
- :sparkles: add objectEntries.

## 4.0.4 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :memo: add CHANGELOG.md.

## 4.0.3 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :wrench: update settings.json.
- :bookmark: version bump.
- :twisted_rightwards_arrows: Merge branch 'master' of github.com:vangware/micro
- :truck: move docs and url to https://micro.vangware.com.
- :sparkles: Create CNAME
- :truck: move docs to html in docs directory (for GH Pages)

## 4.0.2 (deprecated @vangware/micro)

- :white_check_mark: update tests.
- :memo: update README.md.
- :bookmark: version bump.

## 4.0.1 (deprecated @vangware/micro)

- :ambulance: isNullish should check undefined first.
- :white_check_mark: minor test tweaks related to linter.

## 4.0.0 (deprecated @vangware/micro)

- :building_construction: functional rework.
- :fire: remove isMap (use immutable structures).
- :fire: remove isSet (use immutable structures).
- :fire: remove isWeakMap (use immutable structures).
- :fire: remove isWeakSet (use immutable structures).
- :fire: remove jsonParse (use JSON.parse).
- :fire: remove primitive class wrappers.
- :fire: remove tryCatch (avoid try/catch).
- :truck: rename arraySplitFilter -> arrayFilterTuple
- :white_check_mark: update test to not use random.
- :building_construction: change arrayInsert to insert only one element.
- :building_construction: change arrayPush to insert only one element.
- :building_construction: change arrayReplace to replace only one element.
- :building_construction: noop to return the given value.
- :building_construction: tapObserver to return the given value.

## 3.0.1 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :art: improve code to match new linter rules.
- :memo: update documentation based on line length changes.
- :bookmark: version bump.

## 3.0.0 (deprecated @vangware/micro)

- :bookmark: version 3.0.0
- :building_construction: change when to work with nullish instead of falsy.
- :building_construction: simplified stringMapReplace.
- :building_construction: change tslint with eslint.
- :sparkles: add isNullish util.
- :sparkles: add arrayPush util.
- :truck: rename config files (Prettier, linter, etc)
- :memo: update documentation.

## 2.1.1 (deprecated @vangware/micro)

- :bulb: document with typedoc.
- :bookmark: version bump.

## 2.1.0 (deprecated @vangware/micro)

- :art: improve objectMap to work with no object.

## 2.0.0 (deprecated @vangware/micro)

- :fire: remove typeOf (goodbye good fella).

## 1.5.0 (deprecated @vangware/micro)

- :sparkles: add constants.
- :memo: update README.md.
- :bookmark: version bump.

## 1.4.2 (deprecated @vangware/micro)

- :bug: fix mixing exports in index.
- :bookmark: version bump.

## 1.4.1 (deprecated @vangware/micro)

- :truck: rename isMapFunction to IsMapFunction (casing issue).
- :bookmark: version bump.

## 1.4.0 (deprecated @vangware/micro)

- :sparkles: add `isArray` util.
- :sparkles: add `isBigInt` util.
- :sparkles: add `isBoolean` util.
- :sparkles: add `isDate` util.
- :sparkles: add `isFunction` util.
- :sparkles: add `isInstanceOf` util.
- :sparkles: add `isMap` util.
- :sparkles: add `isNull` util.
- :sparkles: add `isNumber` util.
- :sparkles: add `isObject` util.
- :sparkles: add `isPromise` util.
- :sparkles: add `isRegExp` util.
- :sparkles: add `isSet` util.
- :sparkles: add `isString` util.
- :sparkles: add `isSymbol` util.
- :sparkles: add `isUndefined` util.
- :sparkles: add `isWeakMap` util.
- :sparkles: add `isWeakSet` util.
- :memo: update README.md.
- :fire: deprecated `typeOf` util.
- :wrench: update test configs.
- :truck: move testsUtils to test directory.
- :white_check_mark: update tests.
- :memo: update README.md to include more badges.
- :green_heart: add CI comments.

## 1.3.1 (deprecated @vangware/micro)

- :white_check_mark: Improved tests.
- :white_check_mark: Add test coverage.
- :wrench: update TS configurations.
- :bookmark: version bump.

## 1.3.0 (deprecated @vangware/micro)

- :sparkles: add arrayReduce.
- :sparkles: add arraySplit.
- :building_construction: change utils to use arrayReduce.
- :building_construction: change utils to use typeOf.
- :memo: update README.md with new utils.
- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 1.2.1 (deprecated @vangware/micro)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 1.2.0 (deprecated @vangware/micro)

- :construction_worker: add Travis config.
- :sparkles: add when util.
- :white_check_mark: add test for when.
- :bookmark: version bump.
- :memo: update README-md.

## 1.1.0 (deprecated @vangware/micro)

- :art: improve types.
- :building_construction: removed defaults and some optionals that didn't made any sense.
- :bookmark: version bump.

## 1.0.1 (deprecated @vangware/micro)

- :art: improve noop types.
- :bookmark: version bump.
- :page_facing_up: add MIT license file.

## 1.0.0 (deprecated @vangware/micro)

- :tada: initial commit
