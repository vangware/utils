import { Entry } from "./Entry";

/**
 * Array of Entries (`Entry` type).
 *
 * @template Source Source object to which the entities belong to.
 */
export type Entries<Source> = readonly Entry<Source>[];

export default Entries;
