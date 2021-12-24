import { functionNot } from "../function/functionNot.js";
import type { ImmutableRecord } from "../types/ImmutableRecord.js";
import { isNull } from "./isNull.js";
import { isType } from "./isType.js";

/**
 * Check if `entity` is an instance of `Object` (`null` is omitted).
 *
 * @template Actual Actual type of the entity.
 * @param entity Entity to check.
 */
export const isObject = <Actual = unknown>(
	entity: Actual | ImmutableRecord,
): entity is ImmutableRecord =>
	functionNot(isNull)(entity) && isType<ImmutableRecord>("object")(entity);
