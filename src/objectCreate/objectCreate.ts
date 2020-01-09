import ObjectCreateFunction from "./ObjectCreateFunction";

/**
 * Object.create wrapper with default null prototype.
 *
 * @param prototype - Base prototype of the new object (null by default).
 * @returns New object with given prototype.
 */
// eslint-disable-next-line no-null/no-null
export const objectCreate: ObjectCreateFunction = (prototype = null) =>
	Object.freeze(Object.create(prototype));

export default objectCreate;
