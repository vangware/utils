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
export const otherwise = handler => promise => promise.catch(handler);
