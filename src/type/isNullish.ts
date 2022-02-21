import type { Nullish } from "../types/Nullish.js";
import { isNull } from "./isNull.js";
import { isUndefined } from "./isUndefined.js";

/**
 * Check if `entity` is `undefined` or `null`.
 *
 * @example
 * ```typescript
 * isNullish(undefined); // true
 * isNullish(null); // true
 * isNullish(1); // false
 * ```
 * @template Actual Actual type of the entity.
 * @param entity Entity to check.
 * @returns `true` if is nullish, `false` if not.
 */
export const isNullish = <Actual = unknown>(
	entity: Actual | Nullish,
): entity is Nullish => isUndefined(entity) || isNull(entity);
