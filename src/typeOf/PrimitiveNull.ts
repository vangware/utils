/**
 * Primitive null wrapper.
 */
export class PrimitiveNull {
	public static [Symbol.hasInstance](value: unknown) {
		return value === null;
	}
}

export default PrimitiveNull;
