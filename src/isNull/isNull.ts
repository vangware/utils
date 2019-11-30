/**
 * Check if given value is null.
 *
 * @param value - Value to check.
 * @returns True if is a null, false if not.
 */
export const isNull = <ValueType = unknown>(
	value: ValueType | null
	// eslint-disable-next-line no-null/no-null
): value is null => value === null;

export default isNull;
