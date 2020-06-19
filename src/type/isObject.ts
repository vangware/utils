import { functionNot } from "../function/functionNot";
import { isNull } from "./isNull";
import { isType } from "./isType";

/**
 * Check if `entity` is an instance of `Object` (`null` is omitted).
 *
 * @template Actual Actual type of the entity.
 * @param entity Entity to check.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const isObject = <Actual>(entity: Actual | object): entity is object =>
	// eslint-disable-next-line @typescript-eslint/ban-types
	functionNot(isNull)(entity) && isType<object>("object")(entity);

export default isObject;
