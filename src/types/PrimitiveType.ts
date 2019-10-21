import PrimitiveTypeString from "./PrimitiveTypeString";

/**
 * Primitive type wrapper.
 */
export abstract class PrimitiveType {
	/**
	 * Type to check.
	 */
	protected static type: PrimitiveTypeString = "undefined";

	/**
	 * Instance checker.
	 */
	public static [Symbol.hasInstance]<ValueType = unknown>(value: ValueType) {
		return typeof value === this.type;
	}
}

export default PrimitiveType;
