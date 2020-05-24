import { isType } from "./isType";

/**
 * Check if `entity` is an instance of `Number`.
 */
export const isNumber = isType<number>("number");

export default isNumber;
