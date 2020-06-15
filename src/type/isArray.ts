/**
 * Check if given `entity` is an instance of `Array`.
 *
 * @template Actual Actual type of the given entity.
 * @template Item Type of items in given entity.
 * @param entity Entity to check.
 */
export const isArray = <Actual = unknown, Item = unknown>(
	entity: Actual | readonly Item[]
): entity is readonly Item[] => Array.isArray(entity);

export default isArray;