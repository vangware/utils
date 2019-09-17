import PrimitiveType from "./PrimitiveType";
import PrimitiveTypeString from "./PrimitiveTypeString";

/**
 * Primitive function wrapper.
 */
export class PrimitiveFunction extends PrimitiveType {
	protected static type: PrimitiveTypeString = "function";
}

export default PrimitiveFunction;
