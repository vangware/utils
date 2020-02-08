/**
 * Bounds the given context to the given method.
 *
 * @category Classes
 * @example
 * ```typescript
 * const bindConsole = bind(console);
 * const log = bindConsole(console.log);
 *
 * log("Hello world!"); // Logs "Hello world!" without context errors.
 * ```
 * @returns Curried function with `context` in context.
 */
export const bind = context => method => method.bind(context);
