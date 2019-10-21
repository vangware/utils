import isInstanceOf from "../isInstanceOf";

/**
 * Check if given value is an instance of WeakMap.
 * @param value Value to check.
 */
export const isWeakMap = <
	ValueType = unknown,
	WeakMapKeyType extends object = object,
	WeakMapValueType = unknown
>(
	value: ValueType | WeakMap<WeakMapKeyType, WeakMapValueType>
): value is WeakMap<WeakMapKeyType, WeakMapValueType> =>
	isInstanceOf(value, WeakMap);

export default isWeakMap;
