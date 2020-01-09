# Change log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/).
This project uses [Gitmoji](https://gitmoji.carloscuesta.me/)

## 4.0.5

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

## 4.0.4

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :memo: add CHANGELOG.md.

## 4.0.3

- :arrow_up: dependency upgrade.
- :wrench: update settings.json.
- :bookmark: version bump.
- :twisted_rightwards_arrows: Merge branch 'master' of github.com:vangware/micro
- :truck: move docs and url to https://micro.vangware.com.
- :sparkles: Create CNAME
- :truck: move docs to html in docs directory (for GH Pages)

## 4.0.2

- :white_check_mark: update tests.
- :memo: update README.md.
- :bookmark: version bump.

## 4.0.1

- :ambulance: isNullish should check undefined first.
- :white_check_mark: minor test tweaks related to linter.

## 4.0.0

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

## 3.0.1

- :arrow_up: dependency upgrade.
- :art: improve code to match new linter rules.
- :memo: update documentation based on line length changes.
- :bookmark: version bump.

## 3.0.0

- :bookmark: version 3.0.0
- :building_construction: change when to work with nullish instead of falsy.
- :building_construction: simplified stringMapReplace.
- :building_construction: change tslint with eslint.
- :sparkles: add isNullish util.
- :sparkles: add arrayPush util.
- :truck: rename config files (Prettier, linter, etc)
- :memo: update documentation.

## 2.1.1

- :bulb: document with typedoc.
- :bookmark: version bump.

## 2.1.0

- :art: improve objectMap to work with no object.

## 2.0.0

- :fire: remove typeOf (goodbye good fella).

## 1.5.0

- :sparkles: add constants.
- :memo: update README.md.
- :bookmark: version bump.

## 1.4.2

- :bug: fix mixing exports in index.
- :bookmark: version bump.

## 1.4.1

- :truck: rename isMapFunction to IsMapFunction (casing issue).
- :bookmark: version bump.

## 1.4.0

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

## 1.3.1

- :white_check_mark: Improved tests.
- :white_check_mark: Add test coverage.
- :wrench: update TS configurations.
- :bookmark: version bump.

## 1.3.0

- :sparkles: add arrayReduce.
- :sparkles: add arraySplit.
- :building_construction: change utils to use arrayReduce.
- :building_construction: change utils to use typeOf.
- :memo: update README.md with new utils.
- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 1.2.1

- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 1.2.0

- :construction_worker: add Travis config.
- :sparkles: add when util.
- :white_check_mark: add test for when.
- :bookmark: version bump.
- :memo: update README-md.

## 1.1.0

- :art: improve types.
- :building_construction: removed defaults and some optionals that didn't made any sense.
- :bookmark: version bump.

## 1.0.1

- :art: improve noop types.
- :bookmark: version bump.
- :page_facing_up: add MIT license file.

## 1.0.0

- :tada: initial commit
