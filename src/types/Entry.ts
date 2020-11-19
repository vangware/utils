/**
 * Entity tuple `[key, object[key]]`.
 *
 * @template Source Source object to which the entity belongs to.
 */
export type Entry<Source> = readonly [key: string, value: Source[keyof Source]];
