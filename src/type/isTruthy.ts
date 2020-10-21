import { Truthy } from "../types/Truthy";
import { isFalsy } from "./isFalsy";

/**
 * Check if given `entity` is truthy (so not 0, NaN, "", false, or nullish).
 *
 * @template Actual Actual type of the given entity.
 * @param entity Entity to check.
 */
export const isTruthy = <Actual>(entity: Actual): entity is Truthy<Actual> =>
	!isFalsy(entity);
