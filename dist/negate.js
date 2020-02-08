/**
 * Takes a function and returns a copy with negated output.
 *
 * @category Functions
 * @example
 * ```typescript
 * const isPositive = (value: number) => value >= 0;
 * const isNegative = not(isPositive);
 *
 * isPositive(1); // true
 * isNegative(1); // false
 * ```
 * @param predicate Function to be negated.
 * @returns Source function with negated output.
 */
export const negate = predicate => input => !predicate(input);
