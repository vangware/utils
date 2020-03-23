import type StringMapReplaceMap from "./StringMapReplaceMap";

export type StringMapReplaceFunction = (
	target: string,
	replaceMap: StringMapReplaceMap
) => string;

export default StringMapReplaceFunction;
