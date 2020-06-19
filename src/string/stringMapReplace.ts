import { arrayReduce } from "../array/arrayReduce";
import { objectEntries } from "../object/objectEntries";
import { Entry } from "../types/Entry";
import { StringReplaceMap } from "../types/StringReplaceMap";

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
		arrayReduce<Entry<string>, string>(output => ([match, value]) =>
			output.replace(new RegExp(match, "gu"), `${value}`)
		)(source)(objectEntries(replaceMap));

export default stringMapReplace;
