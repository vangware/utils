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
export declare const set: <const Key extends PropertyKey>(
	key: Key,
) => <const Value>(value: Value) => <
	const Source extends {
		readonly [x: string]: unknown;
		readonly [x: number]: unknown;
		readonly [x: symbol]: unknown;
	},
>(
	object: Source,
) => Omit<Source, Key> & ReadOnlyRecord<Key, Value>;
