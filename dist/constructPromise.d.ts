/**
 * Functional alias for `new Promise()`.
 *
 * @category Classes
 */
export declare const constructPromise: <Value>(
	executor: (
		resolve: (value: Value) => void,
		reject: (reason?: unknown) => void,
	) => void,
) => Promise<Value>;
