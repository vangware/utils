import { stringParseNumber } from "./stringParseNumber";

/**
 * Parses a string to a decimal value.
 *
 * @example
 * ```typescript
 * stringParseDecimal("10"); // 10
 * stringParseDecimal("0x10"); // 10
 * ```
 * @param source Source string to be parsed.
 * @returns Parsed string.
 */
export const stringParseDecimal = stringParseNumber(10);
