import type { Truthy } from "../types/Truthy.js";
import { isFalsy } from "./isFalsy.js";

/**
 * Check if given `entity` is truthy (so not 0, NaN, "", false, or nullish).
 *
 * @template Actual Actual type of the given entity.
 * @param entity Entity to check.
 */
export const isTruthy = <Actual = unknown>(
	entity: Actual,
): entity is Truthy<Actual> => !isFalsy(entity);
