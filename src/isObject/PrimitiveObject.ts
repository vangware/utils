import isNull from "../isNull";
import PrimitiveType from "../types/PrimitiveType";
import PrimitiveTypeString from "../types/PrimitiveTypeString";

/**
 * Primitive object wrapper.
 */
export class PrimitiveObject extends PrimitiveType {
	protected static type: PrimitiveTypeString = "object";

	public static [Symbol.hasInstance]<ValueType = unknown>(value: ValueType) {
		return !isNull(value) && super[Symbol.hasInstance](value);
	}
}

export default PrimitiveObject;
