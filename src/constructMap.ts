import { construct } from "./construct.js";

/**
 * Functional alias for `new Map()`.
 */
export const constructMap = construct(Map) as <Key, Value>(
	iterable?: Iterable<readonly [Key, Value]>,
	// eslint-disable-next-line functional/prefer-readonly-type
) => Map<Key, Value>;
