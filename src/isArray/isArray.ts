import isInstanceOf from "../isInstanceOf";

/**
 * Check if given value is an instance of Array.
 *
 * @param value - Value to check.
 * @returns True if is an array, false if not.
 */
export const isArray = <ValueType = unknown, ItemType = unknown>(
	value: ValueType | ItemType[]
): value is ItemType[] => isInstanceOf(value, Array);

export default isArray;
