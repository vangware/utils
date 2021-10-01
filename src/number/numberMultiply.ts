import { decimalTupleMultiply } from "./decimalTupleMultiply";
import { decimalTupleToNumber } from "./decimalTupleToNumber";
import { numberToDecimalTuple } from "./numberToDecimalTuple";

/**
 * Takes a `multiplier` and `multiplicand` and returns the precise
 * multiplication of those factors (uses `DecimalTuple` internally).
 *
 * @example
 * ```typescript
 * const double = numberMultiply(2);
 *
 * double(0.5); // 1
 * ```
 * @param multiplier Multiplier of the multiplication.
 * @returns Curried function with `multiplier` set in context.
 */
export const numberMultiply =
	(multiplier: number) =>
	/**
	 * @param multiplicand Multiplicand of the multiplication.
	 * @returns The result of `multiplicand` * `multiplier`.
	 */
	(multiplicand: number) =>
		decimalTupleToNumber(
			decimalTupleMultiply(numberToDecimalTuple(multiplier))(
				numberToDecimalTuple(multiplicand),
			),
		);
