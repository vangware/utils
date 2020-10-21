import { decimalTupleDivide } from "./decimalTupleDivide";
import { decimalTupleToNumber } from "./decimalTupleToNumber";
import { numberToDecimalTuple } from "./numberToDecimalTuple";

/**
 * Takes a `divisor` and `dividend` and returns the precise division of those
 * values (uses `DecimalTuple` internally).
 *
 * @example
 * ```typescript
 * const half = numberDivide(2);
 *
 * half(5); // 2.5
 * ```
 * @param divisor Divisor of the division.
 * @returns Curried function with `divisor` set in context.
 */
export const numberDivide = (divisor: number) =>
	/**
	 * @param dividend Dividend of the division.
	 * @returns The result of `dividend` / `divisor`.
	 */
	(dividend: number) =>
		decimalTupleToNumber(
			decimalTupleDivide(numberToDecimalTuple(divisor))(
				numberToDecimalTuple(dividend)
			)
		);
