import { isString } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `String`.
 */
export const whenIsString = when(isString);
