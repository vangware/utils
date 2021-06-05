import type { Radix } from "../types/Radix";

/**
 * Wrapper of `parseInt` with mandatory radix.
 *
 * @example
 * ```typescript
 * stringParseNumber(10)("10"); // 10
 * stringParseNumber(16)("10"); // 16 (0x10)
 * stringParseNumber(2)("10"); // 2
 * ```
 * @param radix A value between 2 and 36 that specifies the base of the number.
 * @returns Curried function with `radix` in context.
 */
export const stringParseNumber =
	(radix: Radix) =>
	/**
	 * @param source Source string to be parsed.
	 * @returns Parsed string.
	 */
	(source: string) =>
		parseInt(source, radix);
