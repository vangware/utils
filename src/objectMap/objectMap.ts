/**
 * Object mapping.
 * @param targetObject Target object.
 * @param callback Map callback (to be called for every object key).
 */
export const objectMap = <
	ObjectType,
	OutputType = ObjectType[keyof ObjectType]
>(
	targetObject: ObjectType,
	callback: (
		value: ObjectType[keyof ObjectType],
		key: string,
		targetObject: ObjectType
	) => OutputType
): OutputType[] =>
	Object.keys(targetObject).map(key =>
		callback(targetObject[key], key, targetObject)
	);

export default objectMap;
