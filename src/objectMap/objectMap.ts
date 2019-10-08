import ObjectMapFunction from "./ObjectMapFunction";

/**
 * Object mapping.
 * @param targetObject Target object.
 * @param mapper Map callback (to be called for every object key).
 */
export const objectMap: ObjectMapFunction = (targetObject, mapper) =>
	Object.keys(targetObject).map(key =>
		mapper(targetObject[key], key, targetObject)
	);

export default objectMap;
