import PrimitiveType from "../types/PrimitiveType";
import PrimitiveTypeString from "../types/PrimitiveTypeString";

/**
 * Primitive bigint wrapper.
 */
export class PrimitiveBigInt extends PrimitiveType {
	protected static type: PrimitiveTypeString = "bigint";
}

export default PrimitiveBigInt;
