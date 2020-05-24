import { instanceOf } from "./instanceOf";

/**
 * Check if `entity` is an instance of `RegExp`.
 */
export const isRegExp = instanceOf<RegExp>(RegExp);

export default isRegExp;
