import { constructMap } from "./constructMap.js";
/**
 * Memoize function return values for expensive operations.
 *
 * @category Functions
 * @example
 * ```typescript
 * const expensiveOperation = (value: number) => value * 2;
 * const memoizedOperation = memoize(expensiveOperation);
 *
 * memoizedOperation(2); // 4
 * memoizedOperation(2); // 4 (cached)
 * ```
 * @param unary Function to memoize.
 * @returns Curried function with `unary` in context.
 */
export const memoize = unary =>
	(
		cache => input =>
			cache.get(input) ?? cache.set(input, unary(input)).get(input)
	)(constructMap());
