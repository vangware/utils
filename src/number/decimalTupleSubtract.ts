import { DecimalTuple } from "../types";
import { decimalTupleAdd } from "./decimalTupleAdd";

/**
 * Takes a `subtrahend` and `minuend` and returns the subtraction of those
 * values.
 *
 * @example
 * ```typescript
 * const subtractPoint1 = decimalTupleSubtract([1, -1]);
 *
 * subtractPoint1([1, 0]); // [9, -1] -> 0.9
 * ```
 * @param subtrahend Subtrahend of the subtraction.
 * @returns Curried function with `subtrahend` set in context.
 */
export const decimalTupleSubtract = ([coefficient, exponent]: DecimalTuple) =>
	/**
	 * @param minuend Minuend of the subtraction.
	 * @returns DecimalTuple with the result of `minuend` - `subtrahend`.
	 */
	(minuend: DecimalTuple) =>
		decimalTupleAdd(minuend)([-coefficient, exponent]);

export default decimalTupleSubtract;
