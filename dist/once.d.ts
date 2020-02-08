import type { Unary, UnaryInput, UnaryOutput } from "@vangware/types";
/**
 * Runs a function once, and after that returns always the same value.
 *
 * @category Functions
 * @example
 * ```typescript
 * const expensiveOperation = (value: number) => value * 2;
 * const onceOperation = once(expensiveOperation);
 *
 * onceOperation(2); // 4
 * onceOperation(3); // 4 (cached)
 * ```
 * @param unary Function to run once.
 * @returns Curried function with `unary` in context.
 */
export declare const once: <OnceFunction extends Unary<never, unknown>>(
	unary: OnceFunction,
) => (
	value: UnaryInput<OnceFunction>,
) => UnaryOutput<OnceFunction> | UnaryOutput<OnceFunction>;
