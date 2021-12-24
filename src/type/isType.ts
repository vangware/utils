import { equalValues } from "../equal/equalValues.js";
import type { TypeOf } from "../types/TypeOf.js";

/**
 * Takes a `type` string and checks if given `entity` is of that `typeof`.
 *
 * @example
 * ```typescript
 * const isTypeString = typeOf<string>("string");
 *
 * isTypeString("value"); // true
 * isTypeString(1); // false
 * ```
 * @template Expected Expected type.
 * @param type Type to check (from `typeof`).
 * @returns Curried function with `type` in context.
 */
export const isType =
	<Expected = unknown>(type: TypeOf) =>
	/**
	 * @template Actual Actual type of the entity.
	 * @param entity Entity to check.
	 * @returns `true` if `entity`'s `typeof` is equal to `type`.
	 */
	<Actual = unknown>(entity: Actual | Expected): entity is Expected =>
		equalValues(type)(typeof entity);
