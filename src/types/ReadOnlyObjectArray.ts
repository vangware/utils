import ReadOnlyObject from "./ReadOnlyObject";

/**
 * Array of ReadOnlyObject values.
 */
export type ReadOnlyObjectArray<Item> = readonly ReadOnlyObject<Item>[];

export default ReadOnlyObjectArray;
