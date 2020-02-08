import type { Unary } from "@vangware/types";
/**
 * Sets a promise `catch` handler.
 *
 * @category Promises
 * @example
 * ```typescript
 * const otherwiseLog = otherwise(console.error);
 *
 * otherwiseLog(fetch("/api")); // Logs on error.
 * ```
 * @returns Curried function with `handler` set in context.
 */
export declare const otherwise: <Output>(
	handler: Unary<unknown, Output | PromiseLike<Output>>,
) => (promise: Promise<unknown>) => Promise<unknown>;
