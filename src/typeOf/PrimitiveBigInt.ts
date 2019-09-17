import PrimitiveType from "./PrimitiveType";
import PrimitiveTypeString from "./PrimitiveTypeString";

/**
 * Primitive bigint wrapper.
 */
export class PrimitiveBigInt extends PrimitiveType {
	protected static type: PrimitiveTypeString = "bigint";
}

export default PrimitiveBigInt;
