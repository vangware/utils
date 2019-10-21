/**
 * Primitive null wrapper.
 */
export class PrimitiveNull {
	public static [Symbol.hasInstance]<ValueType = unknown>(value: ValueType) {
		return value === null;
	}
}

export default PrimitiveNull;
