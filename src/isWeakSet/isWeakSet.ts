import isInstanceOf from "../isInstanceOf";

/**
 * Check if given value is an instance of WeakSet.
 * @param value Value to check.
 */
export const isWeakSet = <ValueType = unknown, SetType extends object = object>(
	value: ValueType | WeakSet<SetType>
): value is WeakSet<SetType> => isInstanceOf(value, WeakSet);

export default isWeakSet;
