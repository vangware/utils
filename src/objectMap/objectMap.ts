import arrayMap from "../arrayMap";
import { EMPTY_ARRAY } from "../constants";
import isObject from "../isObject";
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
		isObject(targetObject) ? Object.keys(targetObject) : EMPTY_ARRAY,
		key => mapper(targetObject[key], key, targetObject)
	);

export default objectMap;
