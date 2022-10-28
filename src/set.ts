import type { ReadOnlyRecord } from "@vangware/types";

/**
 * Set the value of a property in an object (read only).
 *
 * @category Objects
 * @example
 * ```typescript
 * const setFoo = set("foo");
 *
 * setFoo("baz")({ foo: "bar" }); // { foo: "baz" }
 * setFoo("baz")({ bar: "foo" }); // { bar: "foo", foo: "baz" }
 * setFoo("baz")({}); // { foo: "baz" }
 * ```
 * @returns Curried function with `key` in context.
 */
export const set =
	<Key extends PropertyKey>(key: Key) =>
	<Value>(value: Value) =>
	<Source extends ReadOnlyRecord>(object: Source) =>
		Object.defineProperty({ ...object }, key, {
			configurable: false,
			enumerable: true,
			value,
			writable: false,
		}) as Omit<Source, Key> & ReadOnlyRecord<Value, Key>;
