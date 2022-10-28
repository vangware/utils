import type { Unary, UnaryInput, UnaryOutput } from "@vangware/types";
import { constructMap } from "./constructMap.js";

/**
 * Memoize function return values for expensive operations.
 *
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
export const memoize = <MemoizedFunction extends Unary<never, unknown>>(
	unary: MemoizedFunction,
) => {
	/** Map of inputs to returned values. */
	const cache = constructMap<
		UnaryInput<MemoizedFunction>,
		UnaryOutput<MemoizedFunction>
	>();

	return ((input: UnaryInput<MemoizedFunction>) =>
		cache.get(input) ??
		cache
			.set(input, unary(input as never) as UnaryOutput<MemoizedFunction>)
			.get(input)) as unknown as MemoizedFunction;
};
