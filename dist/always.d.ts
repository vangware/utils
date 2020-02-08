/**
 * Returns a function that always returns the same value.
 *
 * @category Functions
 * @example
 * ```typescript
 * const alwaysFoo = always("foo");
 * const fillWithFoo = map(alwaysFoo);
 *
 * fillWithFoo([0, 1, 2]); // ["foo", "foo", "foo"]
 * ```
 * @returns Function that always return the given value.
 */
export declare const always: <const Input>(input: Input) => () => Input;
