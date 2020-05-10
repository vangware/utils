import { arrayMap } from "./arrayMap";
import { arrayReduce } from "./arrayReduce";
import { objectEntries } from "./objectEntries";
import type { StringReplaceMap } from "./types/StringReplaceMap";
import type { Tuple } from "./types/Tuple";

/**
 * Takes `StringReplaceMap` object and makes a regex map replace of
 * given `source` string.
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
export const stringMapReplace = (replaceMap: StringReplaceMap) =>
	/**
	 * @param source Source string.
	 * @returns New string with replacements done to `source`.
	 */
	(source: string) =>
		arrayReduce<Tuple<string, RegExp>, string>(
			output => ([value, search]) => output.replace(search, value)
		)(source)(
			arrayMap<Tuple<string, string | number>, Tuple<string, RegExp>>(
				([match, value]) => [`${value}`, new RegExp(match, "gu")]
			)(objectEntries(replaceMap))
		);
