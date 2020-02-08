import type { ReadOnlyArray } from "@vangware/types";
/**
 * Picks given properties from an object.
 *
 * @category Objects
 * @example
 * ```typescript
 * const object = { a: 1, b: 2, c: 3 };
 * const pickAC = pick("a", "c");
 * const result = pickAC(object); // { a: 1, c: 3 }
 * ```
 * @param properties Properties to pick.
 * @returns Curried function with `properties` in context.
 */
export declare const pick: <Properties extends ReadOnlyArray<PropertyKey>>(
	...properties: Properties
) => <
	Source extends {
		readonly [x: string]: unknown;
		readonly [x: number]: unknown;
		readonly [x: symbol]: unknown;
	},
>(
	object: Source,
) => Pick<Source, Properties[number]>;
