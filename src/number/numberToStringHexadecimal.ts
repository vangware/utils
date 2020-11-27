import { numberToString } from "./numberToString";

/**
 * Parses a number to a hexadecimal string.
 *
 * @example
 * ```typescript
 * numberToStringHexadecimal(16); // "10"
 * numberToStringHexadecimal(0x10); // "10"
 * ```
 * @param source Source number to be stringified.
 * @returns Stringified number.
 */
export const numberToStringHexadecimal = numberToString(16);
