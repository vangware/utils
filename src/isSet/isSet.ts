import isInstanceOf from "../isInstanceOf";

/**
 * Check if given value is an instance of Set.
 *
 * @param value - Value to check.
 * @returns True if is a Set, false if not.
 */
export const isSet = <ValueType = unknown, SetType = unknown>(
	value: ValueType | Set<SetType>
): value is Set<SetType> => isInstanceOf(value, Set);

export default isSet;
