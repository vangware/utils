import PrimitiveType from "./PrimitiveType";
import PrimitiveTypeString from "./PrimitiveTypeString";

/**
 * Primitive boolean wrapper.
 */
export class PrimitiveBoolean extends PrimitiveType {
	protected static type: PrimitiveTypeString = "boolean";
}

export default PrimitiveBoolean;
