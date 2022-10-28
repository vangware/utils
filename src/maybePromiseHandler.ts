import type { MaybePromise } from "@vangware/types";
import { then } from "./then.js";
import { whenIsPromise } from "./whenIsPromise.js";

/**
 * If the given value is a promise, the `handler` is called when is resolved,
 * otherwise the handler is called directly with the value.
 *
 * @category Objects
 * @example
 * ```typescript
 * const double = maybePromiseHandler((value: number) => value * 2);
 *
 * double(2); // 4
 * double(Promise.resolve(2)); // Promise<4>
 * ```
 * @param handler Handler function to be called with the value.
 * @returns Curried function with `handler` in context.
 */
export const maybePromiseHandler = <Value, Output>(
	handler: (maybePromise: Value) => Output,
) =>
	whenIsPromise<Promise<Output>>(
		then(handler as (maybePromise: unknown) => Output),
	)<Value, Output>(handler) as <
		MaybePromiseValue extends MaybePromise<Value>,
	>(
		maybePromise: MaybePromiseValue,
	) => MaybePromiseValue extends Promise<Value> ? Promise<Output> : Output;
