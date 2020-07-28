import { stringParseDecimal } from "../string/stringParseDecimal";
import { DecimalTuple } from "../types/DecimalTuple";
import { numberFloatToDecimalTuple } from "./numberFloatToDecimalTuple";

/**
 * Takes a `source` number with exponent and returns a `DecimalTuple`.
 *
 * @example
 * ```typescript
 * numberWithExponentToDecimalTuple(15e20); // [15, 20]
 * numberWithExponentToDecimalTuple(1.5e21); // [15, 20]
 * ```
 * @param source Source number to be parsed into a DecimalTuple.
 * @returns DecimalTuple [coefficient, exponent].
 */
export const numberWithExponentToDecimalTuple = (source: number) => {
	const [sourceCoefficient, sourceExponent] = `${source}`.split("e");
	const [coefficient, exponent] = numberFloatToDecimalTuple(
		parseFloat(sourceCoefficient)
	);

	return [
		coefficient,
		stringParseDecimal(sourceExponent) + exponent
	] as DecimalTuple;
};

export default numberWithExponentToDecimalTuple;
