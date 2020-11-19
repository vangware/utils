import { stringParseDecimal } from "../string/stringParseDecimal";
import type { DecimalTuple } from "../types/DecimalTuple";

/**
 * Takes a `source` float number and returns a `DecimalTuple`.
 *
 * @example
 * ```typescript
 * numberFloatToDecimalTuple(15); // [15, 0]
 * numberFloatToDecimalTuple(0.2); // [2, -1]
 * ```
 * @param source Source number to be parsed into a DecimalTuple.
 * @returns DecimalTuple [coefficient, exponent].
 */
export const numberFloatToDecimalTuple = (source: number) => {
	const [whole = "", decimal = ""] = `${source}`.split(".");
	const wholeWithoutTrailingZeros = decimal.length
		? whole
		: whole.replace(/(?<nonZeros>[1-9])(?<zeros>0+)$/u, "$1");

	return [
		stringParseDecimal(`${wholeWithoutTrailingZeros}${decimal}`),
		decimal.length
			? -decimal.length
			: whole.length - wholeWithoutTrailingZeros.length
	] as DecimalTuple;
};
