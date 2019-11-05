import isInstanceOf from "../isInstanceOf";

/**
 * Check if given value is an instance of Date.
 *
 * @param value - Value to check.
 * @returns True if is a Date, false if not.
 */
export const isDate = <ValueType = unknown>(
	value: ValueType | Date
): value is Date => isInstanceOf(value, Date);

export default isDate;
