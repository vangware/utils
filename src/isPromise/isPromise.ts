import isInstanceOf from "../isInstanceOf";

/**
 * Check if given value is an instance of Promise.
 * @param value Value to check.
 */
export const isPromise = <ValueType = unknown, PromiseValue = unknown>(
	value: ValueType | Promise<PromiseValue>
): value is Promise<PromiseValue> => isInstanceOf(value, Promise);

export default isPromise;
