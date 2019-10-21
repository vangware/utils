import PrimitiveType from "../types/PrimitiveType";
import PrimitiveTypeString from "../types/PrimitiveTypeString";

/**
 * Primitive number wrapper.
 */
export class PrimitiveNumber extends PrimitiveType {
	protected static type: PrimitiveTypeString = "number";
}

export default PrimitiveNumber;
