import type { Predicate } from "@vangware/types";
/**
 * Like `when`, but when is falsy the value is returned as is.
 *
 * @category Conditions
 * @example
 * ```typescript
 * const isEven = (value: number) => value % 2 === 0;
 * const whenIsEven = whenTruthy(isEven);
 * const double = (value: number) => value * 2;
 * const doubleWhenEven = whenIsEven(double);
 *
 * doubleWhenEven(2); // 4
 * doubleWhenEven(3); // 3
 * ```
 * @param predicate Predicate to check value against.
 * @returns Curried function with `predicate` in context.
 */
export declare const whenTruthy: <Value, Predicated extends Value = Value>(
	predicate: Predicate<Value, Predicated>,
) => (
	truthyHandler: import("@vangware/types").Unary<Predicated & Value, unknown>,
) => (value: Value) => unknown;