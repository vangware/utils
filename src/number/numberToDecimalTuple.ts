import { stringParseDecimal } from "../string/stringParseDecimal.js";
import type { DecimalTuple } from "../types/DecimalTuple.js";
import { numberFloatToDecimalTuple } from "./numberFloatToDecimalTuple.js";

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
	const [sourceCoefficient = "", sourceExponent = ""] = source
		.toExponential()
		.split("e");
	const [coefficient, exponent] = numberFloatToDecimalTuple(
		parseFloat(sourceCoefficient),
	);

	return [
		coefficient,
		stringParseDecimal(sourceExponent) + exponent,
	] as DecimalTuple;
};
