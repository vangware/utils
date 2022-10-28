import { isSymbol } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `Symbol`.
 */
export const whenIsSymbol = when(isSymbol);
