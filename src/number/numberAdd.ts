import { decimalTupleAdd } from "./decimalTupleAdd";
import { decimalTupleToNumber } from "./decimalTupleToNumber";
import { numberToDecimalTuple } from "./numberToDecimalTuple";

/**
 * Takes a `addend1` and `addend2` and returns the precise addition of those
 * values (uses `DecimalTuple` internally).
 *
 * @example
 * ```typescript
 * const addPoint1 = numberAdd(0.1);
 *
 * addPoint1(0.2); // 0.3
 * ```
 * @param addend2 Second addend of the addition.
 * @returns Curried function with `addend1` set in context.
 */
export const numberAdd =
	(addend2: number) =>
	/**
	 * @param addend1 First addend of the addition.
	 * @returns The result of `addend1` + `addend2`.
	 */
	(addend1: number) =>
		decimalTupleToNumber(
			decimalTupleAdd(numberToDecimalTuple(addend2))(
				numberToDecimalTuple(addend1),
			),
		);
