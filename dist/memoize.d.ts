import type { Unary } from "@vangware/types";
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
export declare const memoize: <MemoizedFunction extends Unary<never, unknown>>(
	unary: MemoizedFunction,
) => MemoizedFunction;
