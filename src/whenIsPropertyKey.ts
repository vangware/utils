import { isPropertyKey } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `PropertyKey`.
 */
export const whenIsPropertyKey = when(isPropertyKey);
