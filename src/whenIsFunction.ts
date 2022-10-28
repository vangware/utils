import { isFunction } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `Function`.
 */
export const whenIsFunction = when(isFunction);
