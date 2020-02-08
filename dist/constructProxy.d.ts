/**
 * Functional alias for `new Proxy()`.
 *
 * @category Classes
 */
export declare const constructProxy: <Target extends object>(
	target: Target,
	handler: ProxyHandler<Target>,
) => Target;
