import PrimitiveType from "./PrimitiveType";
import PrimitiveTypeString from "./PrimitiveTypeString";

/**
 * Primitive number wrapper.
 */
export class PrimitiveNumber extends PrimitiveType {
	protected static type: PrimitiveTypeString = "number";
}

export default PrimitiveNumber;
