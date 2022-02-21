/**
 * Check if given `entity` is an instance of `Array`.
 *
 * @example
 * ```typescript
 * isArray([]); // true
 * isArray(null); // false
 * ```
 * @template Actual Actual type of the given entity.
 * @template Item Type of items in given entity.
 * @param entity Entity to check.
 * @returns `true` if is array, `false` if not.
 */
export const isArray = <Actual = unknown, Item = unknown>(
	entity: Actual | ReadonlyArray<Item>,
): entity is ReadonlyArray<Item> => Array.isArray(entity);
