import type { Unary } from "@vangware/types";

/**
 * Sets a promise `catch` handler.
 *
 * @category Promise
 * @example
 * ```typescript
 * const otherwiseLog = otherwise(console.error);
 *
 * otherwiseLog(fetch("/api")); // Logs on error.
 * ```
 * @returns Curried function with `handler` set in context.
 */
export const otherwise =
	<Output>(handler: Unary<unknown, Output | PromiseLike<Output>>) =>
	(promise: Promise<unknown>) =>
		promise.catch(handler);
