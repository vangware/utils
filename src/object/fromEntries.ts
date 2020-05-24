import { Entries } from "../types/Entries";

/**
 * Takes a `source` entries array and returns an object.
 *
 * @example
 * ```typescript
 * fromEntries([["key", "value"]]); // { key: "value" }
 * fromEntries([["foo", "bar"], ["number", 1]]); // { foo: "bar", number: 1 }
 * ```
 * @template Expected Expected object type.
 * @param source Source entries array.
 * @returns Object resulting of given entries.
 */
export const fromEntries = <Expected>(source: Entries<Expected>) =>
	(Object.fromEntries(source) as unknown) as Readonly<Expected>;

export default fromEntries;
