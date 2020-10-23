import type { ReadOnlyObject } from "./ReadOnlyObject";

/**
 * Entity tuple `[key, object[key]]`.
 *
 * @template Source Source object to which the entity belongs to.
 */
export type Entry<Source> = readonly [
	key: string,
	value: ReadOnlyObject<Source[keyof Source]>
];
