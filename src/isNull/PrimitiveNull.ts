import PrimitiveType from "../types/PrimitiveType";

/**
 * Primitive null wrapper.
 */
export class PrimitiveNull extends PrimitiveType {
	public static [Symbol.hasInstance] = <ValueType = unknown>(
		value: ValueType
		// eslint-disable-next-line no-null/no-null
	) => value === null;
}

export default PrimitiveNull;
