import isInstanceOf from "../isInstanceOf";

/**
 * Check if given value is an instance of Map.
 * @param value Value to check.
 */
export const isMap = <
	ValueType = unknown,
	MapKeyType = unknown,
	MapValueType = unknown
>(
	value: ValueType | Map<MapKeyType, MapValueType>
): value is Map<MapKeyType, MapValueType> => isInstanceOf(value, Map);

export default isMap;
