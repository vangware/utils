import type { NonPrimitive } from "@vangware/types";
import { construct } from "./construct.js";

/**
 * Functional alias for `new Proxy()`.
 *
 * @category Classes
 */
export const constructProxy = construct(Proxy) as <Target extends NonPrimitive>(
	target: Target,
	handler: ProxyHandler<Target>,
) => Target;