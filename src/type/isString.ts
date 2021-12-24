import { isType } from "./isType.js";

/**
 * Check if `entity` is an instance of `String`.
 */
export const isString = isType<string>("string");
