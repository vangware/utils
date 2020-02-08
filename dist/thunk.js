/**
 * Delayed evaluation function.
 *
 * @category Functions
 * @example
 * ```typescript
 * const always = thunk(id);
 * const alwaysFoo = always("foo")
 * alwaysFoo(); // "foo"
 * ```
 * @returns Function that will run the given function when called.
 */
export const thunk = unary => input => () => unary(input);
