/**
 * Takes a `source` function and returns a copy with negated output.
 *
 * @example
 * ```typescript
 * const isPositive = (value: number) => value >= 0;
 * const isNegative = not(isPositive);
 *
 * isPositive(1); // true
 * isNegative(1); // false
 * ```
 * @template Argument Argument type of the given function
 * @param source Source function which output will be negated.
 * @returns Source function with negated output.
 */
export const not = <Argument = unknown>(
	source: (...argument: readonly Argument[]) => boolean
	// eslint-disable-next-line functional/functional-parameters
) => (...argument: readonly Argument[]) => !source(...argument);

export default not;
