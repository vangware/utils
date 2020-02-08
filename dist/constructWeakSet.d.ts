/**
 * Functional alias for `new WeakSet()`.
 *
 * @category Classes
 */
export declare const constructWeakSet: <Value extends object>(
	iterable?: Iterable<Value> | undefined,
) => WeakSet<Value>;
