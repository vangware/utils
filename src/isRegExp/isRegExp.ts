import isInstanceOf from "../isInstanceOf";

/**
 * Check if given value is an instance of RegExp.
 *
 * @param value - Value to check.
 * @returns True if is a RegExp, false if not.
 */
export const isRegExp = <ValueType = unknown>(
	value: ValueType | RegExp
): value is RegExp => isInstanceOf(value, RegExp);

export default isRegExp;
