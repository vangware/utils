import objectCreate from "./objectCreate";

/** Empty array. */
export const EMPTY_ARRAY: readonly never[] = [];

/** Empty object (with no prototype). */
export const EMPTY_OBJECT = objectCreate();

/** Empty string. */
export const EMPTY_STRING = "";
