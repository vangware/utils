import { isType } from "./isType.js";

/**
 * Check if given `entity` is an instance of `Boolean`.
 */
export const isBoolean = isType<boolean>("boolean");
