/**
 * Functional alias for `new WeakMap()`.
 *
 * @category Classes
 */
export declare const constructWeakMap: <Key extends object, Value>(
	iterable?: Iterable<readonly [Key, Value]> | undefined,
) => WeakMap<Key, Value>;
