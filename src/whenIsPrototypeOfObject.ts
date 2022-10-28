import { isPrototypeOfObject } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for when something has an `Object` prototype.
 */
export const whenIsPrototypeOfObject = when(isPrototypeOfObject);
