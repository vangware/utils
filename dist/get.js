/**
 * Get the value of a property in an object.
 *
 * @category Objects
 * @example
 * ```typescript
 * const getFoo = get("foo");
 *
 * getFoo({ foo: "bar" }); // "bar"
 * getFoo({}); // undefined
 * ```
 * @returns Curried function with `key` in context.
 */
export const get = key => object => object[key];
