import { decimalTupleSubtract } from "./decimalTupleSubtract.js";
import { decimalTupleToNumber } from "./decimalTupleToNumber.js";
import { numberToDecimalTuple } from "./numberToDecimalTuple.js";

/**
 * Takes a `subtrahend` and `minuend` and returns the precise subtraction of
 * those values (uses `DecimalTuple` internally).
 *
 * @example
 * ```typescript
 * const subtractPoint1 = numberSubtract(0.1);
 *
 * subtractPoint1(1); // 0.9
 * ```
 * @param subtrahend Subtrahend of the subtraction.
 * @returns Curried function with `subtrahend` set in context.
 */
export const numberSubtract =
	(subtrahend: number) =>
	/**
	 * @param minuend Minuend of the subtraction.
	 * @returns The result of `minuend` - `subtrahend`.
	 */
	(minuend: number) =>
		decimalTupleToNumber(
			decimalTupleSubtract(numberToDecimalTuple(subtrahend))(
				numberToDecimalTuple(minuend),
			),
		);
