import PrimitiveType from "../types/PrimitiveType";
import PrimitiveTypeString from "../types/PrimitiveTypeString";

/**
 * Primitive symbol wrapper.
 */
export class PrimitiveSymbol extends PrimitiveType {
	protected static type: PrimitiveTypeString = "symbol";
}

export default PrimitiveSymbol;
