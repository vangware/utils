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
	public static [Symbol.hasInstance](value: unknown) {
		return typeof value === this.type;
	}
}

export default PrimitiveType;
