/**
 * Sets a promise `then` handler.
 *
 * @category Promises
 * @example
 * ```typescript
 * const thenJson = then((response: Response) => response.json());
 *
 * thenJson(fetch("/api")); // Parsed response
 * ```
 * @returns Curried function with `handler` set in context.
 */
export const then = handler => promise => promise.then(handler);
