import { functionNot } from "../function/functionNot";
import type { ImmutableRecord } from "../types/ImmutableRecord";
import { isNull } from "./isNull";
import { isType } from "./isType";

/**
 * Check if `entity` is an instance of `Object` (`null` is omitted).
 *
 * @template Actual Actual type of the entity.
 * @param entity Entity to check.
 */
export const isObject = <Actual = unknown>(
	entity: Actual | ImmutableRecord
): entity is ImmutableRecord =>
	functionNot(isNull)(entity) && isType<ImmutableRecord>("object")(entity);
