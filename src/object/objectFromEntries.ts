import { Entries } from "../types/Entries";
import ReadOnlyObject from "../types/ReadOnlyObject";

/**
 * Takes a `source` entries array and returns an object.
 *
 * @example
 * ```typescript
 * objectFromEntries([["key", "value"]]); // { key: "value" }
 * objectFromEntries([
 * 	["foo", "bar"],
 * 	["number", 1]
 * ]); // { foo: "bar", number: 1 }
 * ```
 * @template Expected Expected object type.
 * @param source Source entries array.
 * @returns Object resulting of given entries.
 */
export const objectFromEntries = <Expected>(source: Entries<Expected>) =>
	(Object.fromEntries(source) as unknown) as ReadOnlyObject<Expected>;

export default objectFromEntries;
