import { EMPTY_ARRAY } from "../constants";
import isObject from "../isObject";
import ObjectMapFunction from "./ObjectMapFunction";

/**
 * Object mapping.
 * @param targetObject Target object.
 * @param mapper Map callback (to be called for every object key).
 */
export const objectMap: ObjectMapFunction = (targetObject, mapper) =>
	(isObject(targetObject) ? Object.keys(targetObject) : EMPTY_ARRAY).map(
		key => mapper(targetObject[key], key, targetObject)
	);

export default objectMap;
