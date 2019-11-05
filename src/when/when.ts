import WhenFalsyValue from "./WhenFalsyValue";
import WhenFunction from "./WhenFunction";
import WhenTruthyValue from "./WhenTruthyValue";

/**
 * Ternary wrapper based on callbacks.
 *
 * @param value - Value to be checked (truthy/falsy).
 * @param truthyCallback - Callback when value is truthy.
 * @param falsyCallback - Callback when value is falsy.
 * @returns The returned value of truthyCallback or falsyCallback.
 */
export const when: WhenFunction = (value, truthyCallback, falsyCallback) =>
	value
		? truthyCallback(value as WhenTruthyValue<typeof value>)
		: falsyCallback
		? falsyCallback(value as WhenFalsyValue<typeof value>)
		: undefined;

export default when;
