import IsInstanceOfFunction from "./IsInstanceOfFunction";

/**
 * Check if the given value is an instance of the given constructor.
 *
 * @param value - Value to check.
 * @param constructor - Possible constructor of given value.
 * @returns True if is an instance of the given constructor, false if not.
 */
export const isInstanceOf: IsInstanceOfFunction = (value, constructor) =>
	value instanceof constructor;

export default isInstanceOf;
