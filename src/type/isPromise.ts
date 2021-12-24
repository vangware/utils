import { instanceOf } from "./instanceOf.js";

/**
 * Check if `entity` value is an instance of `Promise`.
 *
 * @template PromiseValue Value of the promise.
 * @template Actual Actual type of the entity.
 * @param entity Entity to check.
 */
export const isPromise = <PromiseValue = unknown, Actual = unknown>(
	entity: Actual | Promise<PromiseValue>,
): entity is Promise<PromiseValue> =>
	instanceOf<Promise<PromiseValue>>(Promise)(entity);
