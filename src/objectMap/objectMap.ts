import arrayMap from "../arrayMap";
import { EMPTY_ARRAY } from "../constants";
import isObject from "../isObject";
import objectEntries from "../objectEntries";
import ObjectMapFunction from "./ObjectMapFunction";

/**
 * Object mapping.
 *
 * @param targetObject - Target object.
 * @param mapper - Map callback (to be called for every object key).
 * @returns An array with the object mapped values/keys.
 */
export const objectMap: ObjectMapFunction = (targetObject, mapper) =>
	arrayMap(
		isObject(targetObject) ? objectEntries(targetObject) : EMPTY_ARRAY,
		([key, value]) => mapper(value, key, targetObject)
	);

export default objectMap;
