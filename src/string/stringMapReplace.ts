import { arrayReduce } from "../array/arrayReduce.js";
import { objectEntries } from "../object/objectEntries.js";
import type { Entry } from "../types/Entry.js";
import type { StringReplaceMap } from "../types/StringReplaceMap.js";

/**
 * Takes `StringReplaceMap` object and runs a replaceAll of given object keys
 * with it's values in the `source` string.
 *
 * @example
 * ```typescript
 * const leet = stringMapReplace({
 * 	a: 4,
 * 	e: 3,
 * 	i: 1,
 * 	o: 0
 * });
 *
 * leet("hello there!"); // "h3ll0 th3r3!"
 * ```
 * @param replaceMap Replace map for the string.
 * @returns Curried function with `replaceMap` in context.
 */
export const stringMapReplace =
	(replaceMap: StringReplaceMap) =>
	/**
	 * @param source Source string.
	 * @returns New string with replacements done to `source`.
	 */
	(source: string) =>
		arrayReduce<Entry<string>, string>(
			output =>
				([match, value]) =>
					output.replace(
						new RegExp(match, "gu"),
						`${value as string}`,
					),
		)(source)(objectEntries(replaceMap));
