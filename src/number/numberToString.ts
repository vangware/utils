import type { Radix } from "../types/Radix";

/**
 * Wrapper of `Number.prototype.toString` with mandatory radix.
 *
 * @example
 * ```typescript
 * numberToString(10)(10); // "10"
 * numberToString(16)(16); // "10"
 * numberToString(2)(2); // "10"
 * ```
 * @param radix A value between 2 and 36 that specifies the base of the number.
 * @returns Curried function with `radix` in context.
 */
export const numberToString = (radix: Radix) =>
	/**
	 * @param source Source string to be parsed.
	 * @returns Stringified number.
	 */
	(source: number) => source.toString(radix);
