import type { DecimalTuple } from "../types/DecimalTuple";
import { decimalTupleMultiply } from "./decimalTupleMultiply";
import { decimalTupleToNumber } from "./decimalTupleToNumber";
import { numberToDecimalTuple } from "./numberToDecimalTuple";

/**
 * Takes a `divisor` and `dividend` and returns the division of those values.
 *
 * @example
 * ```typescript
 * const half = decimalTupleDivide([2, 0]);
 *
 * half([5, 0]); // [25, -1] -> 2.5
 * ```
 * @param divisor Divisor `DecimalTuple` of the division.
 * @returns Curried function with `divisor` set in context.
 */
export const decimalTupleDivide =
	([divisorCoefficient, divisorExponent]: DecimalTuple) =>
	/**
	 * @param dividend Dividend `DecimalTuple` of the division.
	 * @returns DecimalTuple with the result of `dividend` / `divisor`.
	 */
	([dividendCoefficient, dividendExponent]: DecimalTuple) => {
		const multiply = decimalTupleMultiply(
			numberToDecimalTuple(
				10 ** Math.abs(Math.min(divisorExponent, dividendExponent)),
			),
		);

		return numberToDecimalTuple(
			decimalTupleToNumber(
				multiply([dividendCoefficient, dividendExponent]),
			) /
				decimalTupleToNumber(
					multiply([divisorCoefficient, divisorExponent]),
				),
		);
	};
