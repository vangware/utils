import type { Predicate, Single, Unary } from "@vangware/types";

/**
 * Takes a function and returns a copy with negated output.
 *
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
export const negate = <Item, Predicated extends Item>(
	predicate: Predicate<Item, Predicated>,
) =>
	((input: Item) =>
		!predicate(input)) as Single<Item> extends Single<Predicated>
		? Unary<Item, boolean>
		: Predicate<Item, Exclude<Item, Predicated>>;
