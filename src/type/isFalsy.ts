import type { Falsy } from "../types/Falsy.js";

/**
 * Check if given `entity` is falsy (0, NaN, "", false, or nullish).
 *
 * @example
 * ```typescript
 * isFalsy(0); // true
 * isFalsy(NaN); // true
 * isFalsy(""); // true
 * isFalsy(false); // true
 * isFalsy(null); // true
 * isFalsy(undefined); // true
 * isFalsy(1); // false
 * ```
 * @template Actual Actual type of the given entity.
 * @param entity Entity to check.
 * @returns `true` if is falsy, `false` if not.
 */
export const isFalsy = <Actual = unknown>(
	entity: Actual | Falsy,
): entity is Falsy => !(entity as boolean);
