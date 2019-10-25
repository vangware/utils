import { EMPTY_ARRAY } from "../constants";
import StringMapReplaceFunction from "./StringMapReplaceFunction";

/**
 * Takes a string and an object and makes a regex map replace
 * @param target Target string.
 * @param replaceMap Map with format `{ "match": "replacing string" }`.
 */
export const stringMapReplace: StringMapReplaceFunction = (
	target,
	replaceMap
) => {
	/** Array of replace matches (empty if none are given). */
	const replaceMapArray = replaceMap ? Object.keys(replaceMap) : EMPTY_ARRAY;

	/** Regular expression joining all matches together. */
	const regExp = new RegExp(
		replaceMapArray
			.map(match =>
				match.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
			)
			.join("|"),
		"g"
	);

	return replaceMapArray.length > 0
		? target.replace(regExp, match => `${replaceMap[match]}`)
		: target;
};

export default stringMapReplace;
