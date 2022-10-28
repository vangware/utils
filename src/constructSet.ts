import { construct } from "./construct.js";

/**
 * Functional alias for `new Set()`.
 */
export const constructSet = construct(Set) as <Value>(
	iterable?: Iterable<Value>,
	// eslint-disable-next-line functional/prefer-readonly-type
) => Set<Value>;
