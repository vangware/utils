import { Entries } from "../types/Entries";

/**
 * Takes a `source` object and returns an entries array.
 *
 * @example
 * ```typescript
 * objectEntries({ key: "value" }); // [["key", "value"]]
 * objectEntries({ foo: "bar", number: 1 }); // [["foo", "bar"], ["number", 1]]
 * ```
 * @template Source Source object type.
 * @param source Source object.
 * @returns Array of entries of the given source object.
 */
export const objectEntries = <Source>(source: Source): Entries<Source> =>
	Object.entries(source);
