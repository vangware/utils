import { isObject } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is an `Object`.
 */
export const whenIsObject = when(isObject);
