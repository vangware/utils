import PrimitiveType from "../types/PrimitiveType";
import PrimitiveTypeString from "../types/PrimitiveTypeString";

/**
 * Primitive function wrapper.
 */
export class PrimitiveFunction extends PrimitiveType {
	protected static type: PrimitiveTypeString = "function";
}

export default PrimitiveFunction;
