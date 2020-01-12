import isArray from "../isArray";
import isObject from "../isObject";
import objectCreate from "../objectCreate";
import ObjectFreezeFunction from "./ObjectFreezeFunction";

/**
 * Object.freeze wrapper (returns a frozen copy of the object).
 *
 * @param target - Object to be frozen.
 * @returns Frozen object.
 */
export const objectFreeze: ObjectFreezeFunction = target =>
	isObject(target)
		? Object.freeze(
				isArray(target)
					? ([...target] as typeof target)
					: objectCreate(target)
		  )
		: target;

export default objectFreeze;
