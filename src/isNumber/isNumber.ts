/**
 * Check if given value is instance of Number.
 *
 * @param value - Value to check.
 * @returns True if is a number, false if not.
 */
export const isNumber = <ValueType = unknown>(
	value: ValueType | number
): value is number => typeof value === "number";

export default isNumber;
