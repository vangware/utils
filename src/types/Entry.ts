import { Tuple } from "./Tuple";

/**
 * Entity tuple `[key, object[key]]`.
 *
 * @template Source Source object to which the entity belongs to.
 */
export type Entry<Source> = Tuple<string, Readonly<Source[keyof Source]>>;
