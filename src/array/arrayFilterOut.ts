import { functionNot } from "../function/functionNot";
import { Filterer } from "../types/Filterer";
import { arrayFilterIn } from "./arrayFilterIn";

/**
 * Takes a negative `filterer` and applies it to given `source` array.
 *
 * @example
 * ```typescript
 * const filterOutEven = arrayFilterOut((item: number) => item % 2 === 0);
 * const filterOutEmpty = arrayFilterOut((item: string) => item === "");
 *
 * filterOutEven([0, 1, 2, 3]); // [1, 3]
 * filterOutEmpty(["hello", "", "", "world"]); // ["hello", "world"]
 * ```
 * @template Item Type of items in source array.
 * @param filterer Filterer out function.
 * @returns Curried function with `filter` set in context.
 */
export const arrayFilterOut = <Item>(filterer: Filterer<Item>) =>
	arrayFilterIn(functionNot(filterer));

export default arrayFilterOut;
