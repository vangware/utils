import type { ReadOnlyArray } from "@vangware/types";
/**
 * Functional alias for `new Array()`.
 *
 * @category Classes
 */
export declare const constructArray: {
	<Item>(length: number): Item[];
	<Items extends ReadOnlyArray>(...items: Items): Items[number][];
};
