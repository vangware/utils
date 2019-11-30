/**
 * Check if given value is instance of Symbol.
 *
 * @param value - Value to check.
 * @returns True if is a symbol, false if not.
 */
export const isSymbol = <ValueType = unknown>(
	value: ValueType | symbol
): value is symbol => typeof value === "symbol";

export default isSymbol;
