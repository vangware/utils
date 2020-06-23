import { Entry } from "./Entry";
import ReadOnlyObjectArray from "./ReadOnlyObjectArray";

/**
 * Array of Entries (`Entry` type).
 *
 * @template Source Source object to which the entities belong to.
 */
export type Entries<Source> = ReadOnlyObjectArray<Entry<Source>>;

export default Entries;
