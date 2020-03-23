import type isSymbol from "./isSymbol";

// Type predicates with arrow functions can't be extracted.
export type IsSymbolFunction = typeof isSymbol;

export default IsSymbolFunction;
