import PrimitiveType from "../types/PrimitiveType";
import PrimitiveTypeString from "../types/PrimitiveTypeString";

/**
 * Primitive string wrapper.
 */
export class PrimitiveString extends PrimitiveType {
	protected static type: PrimitiveTypeString = "string";
}

export default PrimitiveString;
