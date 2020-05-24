import { isType } from "./isType";

/**
 * Check if given `entity` is an instance of `Boolean`.
 */
export const isBoolean = isType<boolean>("boolean");

export default isBoolean;
