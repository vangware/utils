import { functionNot } from "../function/functionNot";
import { isNull } from "./isNull";
import { isType } from "./isType";

/**
 * Check if `entity` is an instance of `Object` (`null` is omitted).
 *
 * @template Actual Actual type of the entity.
 * @param entity Entity to check.
 */
export const isObject = <Actual, Values>(
	entity: Actual | Record<string | number | symbol, Values>
): entity is Record<string | number | symbol, Values> =>
	functionNot(isNull)(entity) &&
	isType<Record<string | number | symbol, Values>>("object")(entity);
