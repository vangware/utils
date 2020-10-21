import { DecimalTuple } from "../types";

/**
 * Takes a `source` DecimalTuple [coefficient, exponent] and returns a number.
 *
 * @example
 * ```typescript
 * decimalTupleToNumber([3141592653589793, -15]); // 3.141592653589793
 * decimalTupleToNumber([5, 3]); // 5000
 * ```
 * @param source Source DecimalTuple [coefficient, exponent].
 * @returns Number generated from the source coefficient and exponent.
 */
export const decimalTupleToNumber = ([coefficient, exponent]: DecimalTuple) => {
	const coefficientString = `${coefficient}`;
	const negativeExponent = exponent < 0;
	const coefficientWithZeros = coefficientString[
		negativeExponent ? "padStart" : "padEnd"
	](
		negativeExponent
			? Math.abs(exponent) + 1
			: coefficientString.length + exponent,
		"0"
	);

	return parseFloat(
		negativeExponent
			? coefficientWithZeros.replace(
					new RegExp(`\\d{${Math.abs(exponent)}}$`, "u"),
					zeros => `.${zeros}`
			  )
			: coefficientWithZeros
	);
};
