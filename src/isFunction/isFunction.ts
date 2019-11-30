/**
 * Check if given value is an instance of Function.
 *
 * @param value - Value to check.
 * @returns True if is a Function, false if not.
 */
export const isFunction = <ValueType = unknown>(
	value: ValueType | Function
): value is Function => typeof value === "function";

export default isFunction;
