import { isType } from "./isType.js";

/**
 * Check if `entity` is an instance of `Symbol`.
 */
export const isSymbol = isType<symbol>("symbol");
