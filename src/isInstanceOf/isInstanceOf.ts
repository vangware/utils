import IsInstanceOfFunction from "./IsInstanceOfFunction";

/**
 * Check if the given value is an instance of the given constructor.
 * @param constructor Constructor to check instance.
 */
export const isInstanceOf: IsInstanceOfFunction = (value, constructor) =>
	value instanceof constructor;

export default isInstanceOf;
