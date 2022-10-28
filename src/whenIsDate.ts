import { isDate } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `Date`.
 */
export const whenIsDate = when(isDate);
