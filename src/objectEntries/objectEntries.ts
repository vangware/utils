import ObjectEntriesFunction from "./ObjectEntriesFunction";

/**
 * Object.entries wrapper.
 *
 * @param target - Target object.
 * @returns Array of tuples ([key, value]) of the given object.
 */
export const objectEntries: ObjectEntriesFunction = target =>
	Object.entries(target);

export default objectEntries;
