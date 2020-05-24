import { not } from "../function/not";
import type { Filterer } from "../types/Filterer";
import { filterIn } from "./filterIn";

/**
 * Takes a negative `filterer` and applies it to given `source` array.
 *
 * @example
 * ```typescript
 * const filterOutEven = filterOut<number>(item => item % 2 === 0);
 * const filterOutEmpty = filterOut<string>(item => item === "");
 *
 * filterOutEven([0, 1, 2, 3]); // [1, 3]
 * filterOutEmpty(["hello", "", "", "world"]); // ["hello", "world"]
 * ```
 * @template Item Type of items in source array.
 * @param filterer Filterer out function.
 * @returns Curried function with `filter` set in context.
 */
export const filterOut = <Item>(filterer: Filterer<Item>) =>
	filterIn(not(filterer));

export default filterOut;
