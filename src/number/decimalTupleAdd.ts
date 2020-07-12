import { arraySort } from "../array/arraySort";
import { DecimalTuple } from "../types";
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
 * @param addend1 First addend `DecimalTuple` of the addition.
 * @returns Curried function with `addend1` set in context.
 */
export const decimalTupleAdd = (addend1: DecimalTuple) =>
	/**
	 * @param addend2 Second addend `DecimalTuple` of the addition.
	 * @returns DecimalTuple with the result of `addend1` + `addend2`.
	 */
	(addend2: DecimalTuple) => {
		const [
			[minCoefficient, minExponent],
			[maxCoefficient, maxExponent]
		] = arraySort<DecimalTuple>(
			([, nextExponent]) => ([, currentExponent]) =>
				nextExponent - currentExponent
		)([addend1, addend2]);

		return [
			decimalTupleToNumber([maxCoefficient, maxExponent - minExponent]) +
				minCoefficient,
			minExponent
		] as DecimalTuple;
	};

export default decimalTupleAdd;
