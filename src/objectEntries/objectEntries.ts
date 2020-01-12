import objectFreeze from "../objectFreeze";
import ObjectEntriesFunction from "./ObjectEntriesFunction";

/**
 * Object.entries wrapper.
 *
 * @param target - Target object.
 * @returns Array of tuples ([key, value]) of the given object.
 */
export const objectEntries: ObjectEntriesFunction = target =>
	objectFreeze(
		Object.entries(target).map(([key, value]) => [key, objectFreeze(value)])
	);

export default objectEntries;
