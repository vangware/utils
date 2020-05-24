/**
 * Check if `entity` is `null`.
 *
 * @template Actual Actual type of the entity.
 * @param entity Entity to check.
 */
export const isNull = <Actual = unknown>(
	entity: Actual | null
	// eslint-disable-next-line no-null/no-null
): entity is null => entity === null;

export default isNull;
