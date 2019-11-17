import arrayReduce from "../arrayReduce";
import { EMPTY_OBJECT } from "../constants";
import objectMap from "../objectMap";
import StringMapReplaceFunction from "./StringMapReplaceFunction";

/**
 * Takes a string and an object and makes a regex map replace
 *
 * @param target - Target string.
 * @param replaceMap - Map with format `{ "match": "replacing string" }`.
 * @returns String with replaced values.
 */
export const stringMapReplace: StringMapReplaceFunction = (
	target,
	replaceMap = EMPTY_OBJECT
) =>
	arrayReduce(
		objectMap(replaceMap, (value, match) => ({
			search: new RegExp(match, "gu"),
			value: `${value}`
		})),
		(output, { search, value }) => output.replace(search, value),
		target
	);

export default stringMapReplace;
