import PrimitiveType from "../types/PrimitiveType";
import PrimitiveTypeString from "../types/PrimitiveTypeString";

/**
 * Primitive undefined wrapper.
 */
export class PrimitiveUndefined extends PrimitiveType {
	protected static type: PrimitiveTypeString = "undefined";
}

export default PrimitiveUndefined;
