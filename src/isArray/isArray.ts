import isInstanceOf from "../isInstanceOf";

/**
 * Check if given value is an instance of Array.
 * @param value Value to check.
 */
export const isArray = <ValueType = unknown, ItemType = unknown>(
	value: ValueType | ItemType[]
): value is ItemType[] => isInstanceOf(value, Array);

export default isArray;
