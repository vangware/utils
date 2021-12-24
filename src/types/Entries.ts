import type { Entry } from "./Entry.js";

/**
 * Array of Entries (`Entry` type).
 *
 * @template Source Source object to which the entities belong to.
 */
export type Entries<Source> = ReadonlyArray<Entry<Source>>;
