/**
 * Object with the following shape:
 * ```
 * {
 * 	[searchString]: "replacingString"
 * }
 * ```
 */
export type StringReplaceMap = {
	readonly [match: string]: string | number;
};

export default StringReplaceMap;
