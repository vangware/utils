import type { NonPrimitive } from "@vangware/types";
import { construct } from "./construct.js";

/**
 * Functional alias for `new WeakSet()`.
 */
export const constructWeakSet = construct(WeakSet) as <
	Value extends NonPrimitive,
>(
	iterable?: Iterable<Value>,
	// eslint-disable-next-line functional/prefer-readonly-type
) => WeakSet<Value>;
