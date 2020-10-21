import { DecimalTuple } from "../types";
import { numberToDecimalTuple } from "./numberToDecimalTuple";

/**
 * Takes a `multiplier` and `multiplicand` and returns the multiplication result
 * of those factors.
 *
 * @example
 * ```typescript
 * const double = decimalTupleMultiply([2, 0]);
 *
 * double([5, -1]); // [1, 0] -> 1
 * ```
 * @param multiplier Multiplier `DecimalTuple` of the multiplication.
 * @returns Curried function with `multiplier` set in context.
 */
export const decimalTupleMultiply = ([
	multiplierCoefficient,
	multiplierExponent
]: DecimalTuple) =>
	/**
	 * @param multiplicand Multiplicand `DecimalTuple` of the multiplication.
	 * @returns DecimalTuple with the result of `multiplicand` * `multiplier`.
	 */
	([multiplicandCoefficient, multiplicandExponent]: DecimalTuple) => {
		const [coefficient, exponent] = numberToDecimalTuple(
			multiplierCoefficient * multiplicandCoefficient
		);

		return [
			coefficient,
			multiplierExponent + multiplicandExponent + exponent
		] as DecimalTuple;
	};
