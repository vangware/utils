import { functionNot } from "./functionNot";
import { isNull } from "./isNull";
import { isType } from "./isType";

/**
 * Check if `entity` is an instance of `Object` (`null` is omitted).
 *
 * @template Actual Actual type of the entity.
 * @param entity Entity to check.
 */
export const isObject = <Actual>(entity: Actual | object): entity is object =>
	functionNot(isNull)(entity) && isType<object>("object")(entity);
