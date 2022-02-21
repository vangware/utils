import { equalValues } from "../equal/equalValues.js";

/**
 * Check if `entity` is `null`.
 *
 * @example
 * ```typescript
 * isNull(null); // true
 * isNull(undefined); // false
 * ```
 * @template Actual Actual type of the entity.
 * @param entity Entity to check.
 * @returns `true` if is null, `false` if not.
 */
export const isNull = <Actual = unknown>(
	entity: Actual | null,
	// eslint-disable-next-line no-null/no-null
): entity is null => equalValues(null)(entity);
