import PrimitiveType from "./PrimitiveType";
import PrimitiveTypeString from "./PrimitiveTypeString";

/**
 * Primitive symbol wrapper.
 */
export class PrimitiveSymbol extends PrimitiveType {
	protected static type: PrimitiveTypeString = "symbol";
}

export default PrimitiveSymbol;
