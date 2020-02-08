import type { ReadOnlyRecord } from "@vangware/types";
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
export declare const get: <const Key extends PropertyKey>(
	key: Key,
) => <const Source extends ReadOnlyRecord<Key>>(
	object: Source,
) => Source[Key & keyof Source];
