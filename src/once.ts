import type { Unary, UnaryInput, UnaryOutput } from "@vangware/types";
import { when } from "./when.js";

/**
 * Runs a function once, and after that returns always the same value.
 *
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
export const once = <OnceFunction extends Unary<never, unknown>>(
	unary: OnceFunction,
) => {
	// eslint-disable-next-line functional/no-let, prefer-const
	let called = false;
	// eslint-disable-next-line functional/no-let, prefer-const
	let result = undefined as UnaryOutput<OnceFunction>;

	return when<UnaryInput<OnceFunction>>(() => called)(() => result)(
		(input: UnaryInput<OnceFunction>) => (
			(called = true),
			(result = unary(input as never) as UnaryOutput<OnceFunction>)
		),
	);
};
