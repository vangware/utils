# Change log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/).
This project uses [Gitmoji](https://gitmoji.carloscuesta.me/)

## 6.0.2

- :sparkles: add Entity type.
- :building_construction: change exports to include types.

## 6.0.1

- :bug: fix mixing exports in index.

## 6.0.0

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

## 5.2.1

- :bento: Update logo.
- :sparkles: Added favicon.

## 5.2.0

- :bookmark: version bump.
- :arrow_up: dependency upgrade.

## 5.1.0

- :bookmark: version bump.
- :building_construction: change exports/imports to use import type/export type when needed.

## 5.0.5

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :building_construction: change code matching new linting settings.

## 5.0.4

- :wrench: update travis config.
- :arrow_up: version bump.
- :sparkles: add time constants.

## 5.0.3

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :wrench: update ava config.

## 5.0.2

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :memo: update docs.

## 5.0.1

- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 5.0.0

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
