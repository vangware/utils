import { isNull } from "./isNull";
import { isUndefined } from "./isUndefined";
import type { Nullish } from "./types/Nullish";

/**
 * Check if `entity` is `undefined` or `null`.
 *
 * @template Actual Actual type of the entity.
 * @param entity Entity to check.
 */
export const isNullish = <Actual>(
	entity: Actual | Nullish
): entity is Nullish => isUndefined(entity) || isNull(entity);