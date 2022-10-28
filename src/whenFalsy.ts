import type { Predicate } from "@vangware/types";
import { identity } from "./identity.js";
import { when } from "./when.js";

/**
 * Like `when`, but when is falsy the value is returned as is.
 *
 * @example
 * ```typescript
 * const isEven = (value: number) => value % 2 === 0;
 * const whenIsOdd = whenFalsy(isEven);
 * const double = (value: number) => value * 2;
 * const doubleWhenOdd = whenIsOdd(double);
 *
 * doubleWhenOdd(2); // 2
 * doubleWhenOdd(3); // 6
 * ```
 * @param predicate Predicate to check value against.
 * @returns Curried function with `predicate` in context.
 */
export const whenFalsy = <Value, Predicated extends Value = Value>(
	predicate: Predicate<Value, Predicated>,
) => when(predicate)(identity);
