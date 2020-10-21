import { numberFloatToDecimalTuple } from "./numberFloatToDecimalTuple";
import { numberWithExponentToDecimalTuple } from "./numberWithExponentToDecimalTuple";

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
export const numberToDecimalTuple = (source: number) =>
	`${source}`.includes("e")
		? numberWithExponentToDecimalTuple(source)
		: numberFloatToDecimalTuple(source);
