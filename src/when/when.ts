import isNullish from "../isNullish";
import WhenFunction from "./WhenFunction";

/**
 * Ternary wrapper based on callbacks.
 *
 * @param value - Value to be checked (truthy/falsy).
 * @param notNullishCallback - Callback when value is not nullish.
 * @param nullishCallback - Callback when value is nullish.
 * @returns The returned value of notNullishCallback or nullishCallback.
 */
export const when: WhenFunction = (
	value,
	notNullishCallback,
	nullishCallback
) =>
	isNullish(value)
		? nullishCallback?.()
		: notNullishCallback(value as NonNullable<typeof value>);

export default when;
