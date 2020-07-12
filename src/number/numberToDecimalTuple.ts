import { DecimalTuple } from "../types/DecimalTuple";

/**
 * Takes a `source` number and returns a DecimalTuple [coefficient, exponent].
 *
 * @example
 * ```typescript
 * numberToDecimalTuple(Math.PI); // [3141592653589793, -15]
 * numberToDecimalTuple(5000); // [5, 3]
 * ```
 * @param source Source number to be parsed into a DecimalTuple.
 * @returns DecimalTuple [coefficient, exponent].
 */
export const numberToDecimalTuple = (source: number) => {
	const [whole, decimal = ""] = `${source}`.split(".");
	const wholeWithoutTrailingZeros = whole.replace(/(?<zeros>0+)$/u, "");

	return [
		parseInt(
			`${decimal.length ? whole : wholeWithoutTrailingZeros}${decimal}`,
			10
		),
		decimal.length
			? -decimal.length
			: whole.length - wholeWithoutTrailingZeros.length
	] as DecimalTuple;
};

export default numberToDecimalTuple;
