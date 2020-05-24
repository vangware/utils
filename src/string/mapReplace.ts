import { reduce } from "../array/reduce";
import { entries } from "../object/entries";
import { Entry } from "../types/Entry";
import type { StringReplaceMap } from "../types/StringReplaceMap";

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
export const mapReplace = (replaceMap: StringReplaceMap) =>
	/**
	 * @param source Source string.
	 * @returns New string with replacements done to `source`.
	 */
	(source: string) =>
		reduce<Entry<string>, string>(output => ([match, value]) =>
			output.replace(new RegExp(match, "gu"), `${value}`)
		)(source)(entries(replaceMap));

export default mapReplace;
