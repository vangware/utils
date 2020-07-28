import { stringParseNumber } from "./stringParseNumber";

/**
 * Parses a string to a hexadecimal value.
 *
 * @example
 * ```typescript
 * stringParseHexadecimal("10"); // 16 (0x10)
 * stringParseHexadecimal("0x10"); // 16 (0x10)
 * ```
 * @param source Source string to be parsed.
 * @returns Parsed string.
 */
export const stringParseHexadecimal = stringParseNumber(16);

export default stringParseHexadecimal;
