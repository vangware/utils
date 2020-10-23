import type { Entry } from "./Entry";
import type { ReadOnlyObjectArray } from "./ReadOnlyObjectArray";

/**
 * Array of Entries (`Entry` type).
 *
 * @template Source Source object to which the entities belong to.
 */
export type Entries<Source> = ReadOnlyObjectArray<Entry<Source>>;
