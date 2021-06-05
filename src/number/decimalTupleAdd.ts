import type { DecimalTuple } from "../types/DecimalTuple";
import { decimalTupleToNumber } from "./decimalTupleToNumber";

/**
 * Takes a `addend1` and `addend2` and returns the addition of those values.
 *
 * @example
 * ```typescript
 * const addPoint1 = decimalTupleAdd([1, -1]);
 *
 * addPoint1([2, -1]); // [3, -1] -> 0.3
 * ```
 * @param addend2 Second addend `DecimalTuple` of the addition.
 * @returns Curried function with `addend1` set in context.
 */
export const decimalTupleAdd =
	(addend2: DecimalTuple) =>
	/**
	 * @param addend1 Fist addend `DecimalTuple` of the addition.
	 * @returns DecimalTuple with the result of `addend1` + `addend2`.
	 */
	(addend1: DecimalTuple) => {
		const [
			[minCoefficient, minExponent],
			[maxCoefficient, maxExponent]
		]: readonly [min: DecimalTuple, max: DecimalTuple] =
			addend1[1] < addend2[1] ? [addend1, addend2] : [addend2, addend1];

		return [
			decimalTupleToNumber([maxCoefficient, maxExponent - minExponent]) +
				minCoefficient,
			minExponent
		] as DecimalTuple;
	};
