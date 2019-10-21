import isInstanceOf from "../isInstanceOf";

/**
 * Check if given value is an instance of Set.
 * @param value Value to check.
 */
export const isSet = <ValueType = unknown, SetType = unknown>(
	value: ValueType | Set<SetType>
): value is Set<SetType> => isInstanceOf(value, Set);

export default isSet;
