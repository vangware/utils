import type { Falsy } from "../types/Falsy";

/**
 * Check if given `entity` is falsy (0, NaN, "", false, or nullish).
 *
 * @template Actual Actual type of the given entity.
 * @param entity Entity to check.
 */
export const isFalsy = <Actual>(entity: Actual | Falsy): entity is Falsy =>
	!entity;
