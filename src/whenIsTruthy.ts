import { isTruthy } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `Truthy` value.
 */
export const whenIsTruthy = when(isTruthy);
