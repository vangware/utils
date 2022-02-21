import { numberToString } from "./numberToString.js";

/**
 * Parses a number to a decimal string.
 *
 * @example
 * ```typescript
 * numberToStringDecimal(10); // "10"
 * numberToStringDecimal(0x10); // "16"
 * ```
 * @param source Source number to be stringified.
 * @returns Stringified number.
 */
export const numberToStringDecimal = numberToString(10);
