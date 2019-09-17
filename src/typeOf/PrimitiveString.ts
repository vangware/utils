import PrimitiveType from "./PrimitiveType";
import PrimitiveTypeString from "./PrimitiveTypeString";

/**
 * Primitive string wrapper.
 */
export class PrimitiveString extends PrimitiveType {
	protected static type: PrimitiveTypeString = "string";
}

export default PrimitiveString;
