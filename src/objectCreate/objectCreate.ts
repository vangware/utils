import type ObjectCreateFunction from "./ObjectCreateFunction";

/**
 * Object.create + Object.assign wrapper with default null prototype.
 *
 * @param base - Base object (null by default).
 * @param prototype - Base prototype of the new object (null by default).
 * @returns New object with given base and prototype.
 */
export const objectCreate: ObjectCreateFunction = (
	base = {},
	// eslint-disable-next-line no-null/no-null
	prototype = null
) => Object.assign(Object.create(prototype), base);

export default objectCreate;
