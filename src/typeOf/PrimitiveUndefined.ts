import PrimitiveType from "./PrimitiveType";
import PrimitiveTypeString from "./PrimitiveTypeString";

/**
 * Primitive undefined wrapper.
 */
export class PrimitiveUndefined extends PrimitiveType {
	protected static type: PrimitiveTypeString = "undefined";
}

export default PrimitiveUndefined;
