import type { Awaitable } from "@vangware/types";
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
export declare const awaitableHandler: <Value, Output>(
	handler: (awaitable: Value) => Output,
) => <AwaitableValue extends Awaitable<Value>>(
	awaitable: AwaitableValue,
) => AwaitableValue extends Promise<Value> ? Promise<Output> : Output;
