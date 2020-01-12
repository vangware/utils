import objectCreate from "./objectCreate";
import objectFreeze from "./objectFreeze";

/** Empty array. */
export const EMPTY_ARRAY: readonly never[] = objectFreeze([]);

/** Empty object (with no prototype). */
export const EMPTY_OBJECT: {} = objectCreate();

/** Empty string. */
export const EMPTY_STRING = "";
