import { isType } from "./isType";

/**
 * Check if `entity` is an instance of `String`.
 */
export const isString = isType<string>("string");

export default isString;
