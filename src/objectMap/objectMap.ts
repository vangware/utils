import arrayMap from "../arrayMap";
import { EMPTY_ARRAY } from "../constants";
import isObject from "../isObject";
import objectEntries from "../objectEntries";
import objectFreeze from "../objectFreeze";
import type ObjectMapFunction from "./ObjectMapFunction";

/**
 * Object mapping.
 *
 * @param target - Target object.
 * @param mapper - Map callback (to be called for every object key).
 * @returns An array with the object mapped values/keys.
 */
export const objectMap: ObjectMapFunction = (target, mapper) => {
	const frozenObject = objectFreeze(target);

	return arrayMap(
		isObject(target) ? objectEntries(target) : EMPTY_ARRAY,
		([key, value]) => mapper(objectFreeze(value), key, frozenObject)
	);
};

export default objectMap;
