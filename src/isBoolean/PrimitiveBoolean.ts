import PrimitiveType from "../types/PrimitiveType";
import PrimitiveTypeString from "../types/PrimitiveTypeString";

/**
 * Primitive boolean wrapper.
 */
export class PrimitiveBoolean extends PrimitiveType {
	protected static type: PrimitiveTypeString = "boolean";
}

export default PrimitiveBoolean;
