
# @vangware/micro

## Index

### Classes

* [PrimitiveBigInt](classes/primitivebigint.md)
* [PrimitiveBoolean](classes/primitiveboolean.md)
* [PrimitiveNull](classes/primitivenull.md)
* [PrimitiveNumber](classes/primitivenumber.md)
* [PrimitiveObject](classes/primitiveobject.md)
* [PrimitiveString](classes/primitivestring.md)
* [PrimitiveSymbol](classes/primitivesymbol.md)
* [PrimitiveType](classes/primitivetype.md)
* [PrimitiveUndefined](classes/primitiveundefined.md)

### Interfaces

* [ArrayGroupObject](interfaces/arraygroupobject.md)
* [StringMapReplaceMap](interfaces/stringmapreplacemap.md)

### Type aliases

* [ArrayGroupGrouper](README.md#arraygroupgrouper)
* [ArrayMapMapper](README.md#arraymapmapper)
* [ArrayReduceReducer](README.md#arrayreducereducer)
* [ArraySplitFilterFilter](README.md#arraysplitfilterfilter)
* [JSONParseReviver](README.md#jsonparsereviver)
* [ObjectMapMapper](README.md#objectmapmapper)
* [PrimitiveTypeString](README.md#primitivetypestring)
* [TapObserver](README.md#tapobserver)
* [TapWrapper](README.md#tapwrapper)
* [TryCatchCatch](README.md#trycatchcatch)
* [WhenNotNullishCallback](README.md#whennotnullishcallback)
* [WhenNullishCallback](README.md#whennullishcallback)

### Variables

* [EMPTY_ARRAY](README.md#const-empty_array)
* [EMPTY_OBJECT](README.md#const-empty_object)
* [EMPTY_STRING](README.md#const-empty_string)

### Functions

* [arrayGroup](README.md#const-arraygroup)
* [arrayInsert](README.md#const-arrayinsert)
* [arrayMap](README.md#const-arraymap)
* [arrayPush](README.md#const-arraypush)
* [arrayReduce](README.md#const-arrayreduce)
* [arrayReplace](README.md#const-arrayreplace)
* [arraySplit](README.md#const-arraysplit)
* [arraySplitFilter](README.md#const-arraysplitfilter)
* [isArray](README.md#const-isarray)
* [isBigInt](README.md#const-isbigint)
* [isBoolean](README.md#const-isboolean)
* [isDate](README.md#const-isdate)
* [isInstanceOf](README.md#const-isinstanceof)
* [isMap](README.md#const-ismap)
* [isNull](README.md#const-isnull)
* [isNullish](README.md#const-isnullish)
* [isNumber](README.md#const-isnumber)
* [isObject](README.md#const-isobject)
* [isPromise](README.md#const-ispromise)
* [isRegExp](README.md#const-isregexp)
* [isSet](README.md#const-isset)
* [isString](README.md#const-isstring)
* [isSymbol](README.md#const-issymbol)
* [isUndefined](README.md#const-isundefined)
* [isWeakMap](README.md#const-isweakmap)
* [isWeakSet](README.md#const-isweakset)
* [jsonParse](README.md#const-jsonparse)
* [jsonParsePromise](README.md#const-jsonparsepromise)
* [noop](README.md#const-noop)
* [objectMap](README.md#const-objectmap)
* [stringMapReplace](README.md#const-stringmapreplace)
* [tap](README.md#const-tap)
* [tryCatch](README.md#const-trycatch)
* [when](README.md#const-when)

## Type aliases

###  ArrayGroupGrouper

Ƭ **ArrayGroupGrouper**: *function*

#### Type declaration:

▸ (`item`: ItemType): *string | number*

**Parameters:**

Name | Type |
------ | ------ |
`item` | ItemType |

___

###  ArrayMapMapper

Ƭ **ArrayMapMapper**: *function*

#### Type declaration:

▸ (`value`: ItemType, `index`: number, `array`: ItemType[]): *OutputType*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ItemType |
`index` | number |
`array` | ItemType[] |

___

###  ArrayReduceReducer

Ƭ **ArrayReduceReducer**: *function*

#### Type declaration:

▸ (`previousValue`: OutputType, `value`: ItemType, `index`: number, `array`: ItemType[]): *OutputType*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | OutputType |
`value` | ItemType |
`index` | number |
`array` | ItemType[] |

___

###  ArraySplitFilterFilter

Ƭ **ArraySplitFilterFilter**: *function*

#### Type declaration:

▸ (`item`: ItemType, `index`: number, `array`: ItemType[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`item` | ItemType |
`index` | number |
`array` | ItemType[] |

___

###  JSONParseReviver

Ƭ **JSONParseReviver**: *function*

#### Type declaration:

▸ (`this`: OutputType, `key`: string, `value`: OutputType[keyof OutputType]): *OutputType[keyof OutputType]*

**Parameters:**

Name | Type |
------ | ------ |
`this` | OutputType |
`key` | string |
`value` | OutputType[keyof OutputType] |

___

###  ObjectMapMapper

Ƭ **ObjectMapMapper**: *function*

#### Type declaration:

▸ (`value`: ObjectType[keyof ObjectType], `key`: string, `targetObject`: ObjectType): *OutputType*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ObjectType[keyof ObjectType] |
`key` | string |
`targetObject` | ObjectType |

___

###  PrimitiveTypeString

Ƭ **PrimitiveTypeString**: *"bigint" | "boolean" | "function" | "number" | "object" | "string" | "symbol" | "undefined"*

Possible primitive types (returned by typeof).

___

###  TapObserver

Ƭ **TapObserver**: *function*

#### Type declaration:

▸ (`value`: ValueType): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ValueType |

___

###  TapWrapper

Ƭ **TapWrapper**: *function*

#### Type declaration:

▸ (`value`: ValueType): *ValueType*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ValueType |

___

###  TryCatchCatch

Ƭ **TryCatchCatch**: *function*

#### Type declaration:

▸ (`error?`: [ErrorType](undefined)): *ReturnedValue | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [ErrorType](undefined) |

___

###  WhenNotNullishCallback

Ƭ **WhenNotNullishCallback**: *function*

#### Type declaration:

▸ (`value`: NonNullable‹ValueType›): *OutputType*

**Parameters:**

Name | Type |
------ | ------ |
`value` | NonNullable‹ValueType› |

___

###  WhenNullishCallback

Ƭ **WhenNullishCallback**: *function*

#### Type declaration:

▸ (): *OutputType*

## Variables

### `Const` EMPTY_ARRAY

• **EMPTY_ARRAY**: *never[]* =  []

Empty array.

___

### `Const` EMPTY_OBJECT

• **EMPTY_OBJECT**: *__type* =  Object.create(null) as {}

Empty object (with no prototype).

___

### `Const` EMPTY_STRING

• **EMPTY_STRING**: *""* = ""

Empty string.

## Functions

### `Const` arrayGroup

▸ **arrayGroup**(`array`: ItemType[], `grouper`: function): *__type*

Creates object with properties grouped by grouper function.

**Parameters:**

▪ **array**: *ItemType[]*

Target array.

▪ **grouper**: *function*

Grouper function (returns the group name).

▸ (`item`: ItemType): *string | number*

**Parameters:**

Name | Type |
------ | ------ |
`item` | ItemType |

**Returns:** *__type*

An object with the shape `{ [group]: [items] }`.

___

### `Const` arrayInsert

▸ **arrayInsert**(`array`: ItemType[], `index`: number, ...`items`: ItemType[]): *ItemType[]*

Insert value in array at given index.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | ItemType[] | Target array. |
`index` | number | Index to start inserting items. |
`...items` | ItemType[] | Items to be inserted. |

**Returns:** *ItemType[]*

New array with inserted values in it.

___

### `Const` arrayMap

▸ **arrayMap**(`array`: ItemType[], `mapper`: function): *OutputType[]*

Array.prototype.map wrapper that can take an undefined value.

**Parameters:**

▪ **array**: *ItemType[]*

Target array.

▪ **mapper**: *function*

Map callback (to be called for every array item).

▸ (`value`: ItemType, `index`: number, `array`: ItemType[]): *OutputType*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ItemType |
`index` | number |
`array` | ItemType[] |

**Returns:** *OutputType[]*

Mapped array.

___

### `Const` arrayPush

▸ **arrayPush**(`array`: ItemType[], ...`items`: ItemType[]): *ItemType[]*

Insert given items at the end of given array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | ItemType[] | Target array. |
`...items` | ItemType[] | Items to be inserted. |

**Returns:** *ItemType[]*

New array with inserted values in it.

___

### `Const` arrayReduce

▸ **arrayReduce**(`array`: ItemType[], `reducer`: function, `initialValue`: OutputType): *OutputType*

Array.prototype.reduce wrapper that can take an undefined value.

**Parameters:**

▪ **array**: *ItemType[]*

Target array.

▪ **reducer**: *function*

Map callback (to be called for every array item).

▸ (`previousValue`: OutputType, `value`: ItemType, `index`: number, `array`: ItemType[]): *OutputType*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | OutputType |
`value` | ItemType |
`index` | number |
`array` | ItemType[] |

▪ **initialValue**: *OutputType*

Initial value of reducer.

**Returns:** *OutputType*

Reduced value.

___

### `Const` arrayReplace

▸ **arrayReplace**(`array`: ItemType[], `index`: number, ...`items`: ItemType[]): *ItemType[]*

Replace value in array at given index.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | ItemType[] | Target array. |
`index` | number | Index to start replacing items. |
`...items` | ItemType[] | Items to be inserted. |

**Returns:** *ItemType[]*

Array with replaced elements.

___

### `Const` arraySplit

▸ **arraySplit**<**ItemType**>(`array`: ItemType[], `length`: number, `vertical`: boolean): *ItemType[][]*

Split array into multiple arrays of the given size.

**Type parameters:**

▪ **ItemType**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`array` | ItemType[] | - | Target array. |
`length` | number | - | Size of every piece. |
`vertical` | boolean | false | Changes the orientation of the split. |

**Returns:** *ItemType[][]*

Array of arrays of the given length.

___

### `Const` arraySplitFilter

▸ **arraySplitFilter**<**ItemType**>(`target`: ItemType[], `filter`: [ArraySplitFilterFilter](README.md#arraysplitfilterfilter)‹ItemType›): *[ItemType[], ItemType[]]*

Split array into two arrays based on a filter.

**Type parameters:**

▪ **ItemType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | ItemType[] | Target array. |
`filter` | [ArraySplitFilterFilter](README.md#arraysplitfilterfilter)‹ItemType› | Filter function. |

**Returns:** *[ItemType[], ItemType[]]*

Array of 2 elements (the true values, and the false values).

___

### `Const` isArray

▸ **isArray**<**ValueType**, **ItemType**>(`value`: ValueType | ItemType[]): *value is ItemType[]*

Check if given value is an instance of Array.

**Type parameters:**

▪ **ValueType**

▪ **ItemType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; ItemType[] | Value to check. |

**Returns:** *value is ItemType[]*

True if is an array, false if not.

___

### `Const` isBigInt

▸ **isBigInt**<**ValueType**>(`value`: ValueType | BigInt): *value is BigInt*

Check if given value is an instance of BigInt.

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; BigInt | Value to check. |

**Returns:** *value is BigInt*

True if is a BigInt, false if not.

___

### `Const` isBoolean

▸ **isBoolean**<**ValueType**>(`value`: ValueType | boolean): *value is boolean*

Check if given value is an instance of Boolean.

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; boolean | Value to check. |

**Returns:** *value is boolean*

True if is a Boolean, false if not.

___

### `Const` isDate

▸ **isDate**<**ValueType**>(`value`: ValueType | Date): *value is Date*

Check if given value is an instance of Date.

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; Date | Value to check. |

**Returns:** *value is Date*

True if is a Date, false if not.

___

### `Const` isInstanceOf

▸ **isInstanceOf**(`value`: ValueType, `constructor`: Function): *boolean*

Check if the given value is an instance of the given constructor.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType | Value to check. |
`constructor` | Function | Possible constructor of given value. |

**Returns:** *boolean*

True if is an instance of the given constructor, false if not.

___

### `Const` isMap

▸ **isMap**<**ValueType**, **MapKeyType**, **MapValueType**>(`value`: ValueType | Map‹MapKeyType, MapValueType›): *value is Map<MapKeyType, MapValueType>*

Check if given value is an instance of Map.

**Type parameters:**

▪ **ValueType**

▪ **MapKeyType**

▪ **MapValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; Map‹MapKeyType, MapValueType› | Value to check. |

**Returns:** *value is Map<MapKeyType, MapValueType>*

True if is a Map, false if not.

___

### `Const` isNull

▸ **isNull**<**ValueType**>(`value`: ValueType | null): *value is null*

Check if given value is null.

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; null | Value to check. |

**Returns:** *value is null*

True if is a null, false if not.

___

### `Const` isNullish

▸ **isNullish**<**ValueType**>(`value`: ValueType | null | undefined): *value is null | undefined*

Check if given value is null or undefined.

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; null &#124; undefined | Value to check. |

**Returns:** *value is null | undefined*

True if is a null or undefined, false if not.

___

### `Const` isNumber

▸ **isNumber**<**ValueType**>(`value`: ValueType | number): *value is number*

Check if given value is instance of Number.

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; number | Value to check. |

**Returns:** *value is number*

True if is a number, false if not.

___

### `Const` isObject

▸ **isObject**<**ValueType**>(`value`: ValueType): *value is Extract<ValueType, object>*

Check if given value is instance of Object (and is not null).

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType | Value to check. |

**Returns:** *value is Extract<ValueType, object>*

True if is an object, false if not.

___

### `Const` isPromise

▸ **isPromise**<**ValueType**, **PromiseValue**>(`value`: ValueType | Promise‹PromiseValue›): *value is Promise<PromiseValue>*

Check if given value is an instance of Promise.

**Type parameters:**

▪ **ValueType**

▪ **PromiseValue**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; Promise‹PromiseValue› | Value to check. |

**Returns:** *value is Promise<PromiseValue>*

True if is a Promise, false if not.

___

### `Const` isRegExp

▸ **isRegExp**<**ValueType**>(`value`: ValueType | RegExp): *value is RegExp*

Check if given value is an instance of RegExp.

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; RegExp | Value to check. |

**Returns:** *value is RegExp*

True if is a RegExp, false if not.

___

### `Const` isSet

▸ **isSet**<**ValueType**, **SetType**>(`value`: ValueType | Set‹SetType›): *value is Set<SetType>*

Check if given value is an instance of Set.

**Type parameters:**

▪ **ValueType**

▪ **SetType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; Set‹SetType› | Value to check. |

**Returns:** *value is Set<SetType>*

True if is a Set, false if not.

___

### `Const` isString

▸ **isString**<**ValueType**>(`value`: ValueType | string): *value is string*

Check if given value is instance of String.

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; string | Value to check. |

**Returns:** *value is string*

True if is a string, false if not.

___

### `Const` isSymbol

▸ **isSymbol**<**ValueType**>(`value`: ValueType | symbol): *value is symbol*

Check if given value is instance of Symbol.

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; symbol | Value to check. |

**Returns:** *value is symbol*

True if is a symbol, false if not.

___

### `Const` isUndefined

▸ **isUndefined**<**ValueType**>(`value`: ValueType | undefined): *value is undefined*

Check if given value is undefined.

**Type parameters:**

▪ **ValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; undefined | Value to check. |

**Returns:** *value is undefined*

True if is undefined, false if not.

___

### `Const` isWeakMap

▸ **isWeakMap**<**ValueType**, **WeakMapKeyType**, **WeakMapValueType**>(`value`: ValueType | WeakMap‹WeakMapKeyType, WeakMapValueType›): *value is WeakMap<WeakMapKeyType, WeakMapValueType>*

Check if given value is an instance of WeakMap.

**Type parameters:**

▪ **ValueType**

▪ **WeakMapKeyType**: *object*

▪ **WeakMapValueType**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; WeakMap‹WeakMapKeyType, WeakMapValueType› | Value to check. |

**Returns:** *value is WeakMap<WeakMapKeyType, WeakMapValueType>*

True if is a WeakMap, false if not.

___

### `Const` isWeakSet

▸ **isWeakSet**<**ValueType**, **SetType**>(`value`: ValueType | WeakSet‹SetType›): *value is WeakSet<SetType>*

Check if given value is an instance of WeakSet.

**Type parameters:**

▪ **ValueType**

▪ **SetType**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | ValueType &#124; WeakSet‹SetType› | Value to check. |

**Returns:** *value is WeakSet<SetType>*

True if is a WeakSet, false if not.

___

### `Const` jsonParse

▸ **jsonParse**(`text`: string, `reviver`: undefined | function): *any*

JSON.parse wrapper with integrated try catch.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | Text value to parse. |
`reviver` | undefined &#124; function | Transformer function. |

**Returns:** *any*

Parsed JSON or undefined.

___

### `Const` jsonParsePromise

▸ **jsonParsePromise**(`text`: string, `reviver`: undefined | function): *Promise‹OutputType›*

Promise wrapper of JSON.parse.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | Text value to parse. |
`reviver` | undefined &#124; function | Transformer function. |

**Returns:** *Promise‹OutputType›*

Promise with parsed JSON. Can be catch if any error is thrown.

___

### `Const` noop

▸ **noop**(...`_params`: ParamsType[]): *undefined*

No operation placeholder function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`..._params` | ParamsType[] | Params (will be ignored). |

**Returns:** *undefined*

Nothing (is just a placeholder function).

___

### `Const` objectMap

▸ **objectMap**(`targetObject`: ObjectType, `mapper`: function): *OutputType[]*

Object mapping.

**Parameters:**

▪ **targetObject**: *ObjectType*

Target object.

▪ **mapper**: *function*

Map callback (to be called for every object key).

▸ (`value`: ObjectType[keyof ObjectType], `key`: string, `targetObject`: ObjectType): *OutputType*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ObjectType[keyof ObjectType] |
`key` | string |
`targetObject` | ObjectType |

**Returns:** *OutputType[]*

An array with the object mapped values/keys.

___

### `Const` stringMapReplace

▸ **stringMapReplace**(`target`: string, `replaceMap`: [StringMapReplaceMap](interfaces/stringmapreplacemap.md)): *string*

Takes a string and an object and makes a regex map replace

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`target` | string | - | Target string. |
`replaceMap` | [StringMapReplaceMap](interfaces/stringmapreplacemap.md) |  EMPTY_OBJECT | Map with format `{ "match": "replacing string" }`. |

**Returns:** *string*

String with replaced values.

___

### `Const` tap

▸ **tap**(`observer`: function): *(Anonymous function)*

Tap into any value.

**Parameters:**

▪ **observer**: *function*

Observer function.

▸ (`value`: ValueType): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ValueType |

**Returns:** *(Anonymous function)*

Tapped function (calls observer with value and returns it).

___

### `Const` tryCatch

▸ **tryCatch**(`tryCallback`: function, `catchCallback`: undefined | function): *undefined | ReturnedValue*

Functional try/catch wrapper.

**Parameters:**

▪ **tryCallback**: *function*

Callback for try.

▸ (): *ReturnedValue*

▪ **catchCallback**: *undefined | function*

Callback for catch.

**Returns:** *undefined | ReturnedValue*

The returned value of the tryCallback or catchCallback.

___

### `Const` when

▸ **when**(`value`: ValueType, `notNullishCallback`: function, `nullishCallback`: undefined | function): *undefined | OutputType*

Ternary wrapper based on callbacks.

**Parameters:**

▪ **value**: *ValueType*

Value to be checked (truthy/falsy).

▪ **notNullishCallback**: *function*

Callback when value is not nullish.

▸ (`value`: NonNullable‹ValueType›): *OutputType*

**Parameters:**

Name | Type |
------ | ------ |
`value` | NonNullable‹ValueType› |

▪ **nullishCallback**: *undefined | function*

Callback when value is nullish.

**Returns:** *undefined | OutputType*

The returned value of notNullishCallback or nullishCallback.
