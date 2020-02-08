import type { ReadOnlyArray } from "@vangware/types";
/**
 * Omits given properties from an object.
 *
 * @category Objects
 * @example
 * ```typescript
 * const object = { a: 1, b: 2, c: 3 };
 * const omitAC = omit("a", "c");
 * const result = omitAC(object); // { b: 2 }
 * ```
 * @param properties Properties to omit.
 * @returns Curried function with `properties` in context.
 */
export declare const omit: <Properties extends ReadOnlyArray<PropertyKey>>(
	...properties: Properties
) => <
	Source extends {
		readonly [x: string]: unknown;
		readonly [x: number]: unknown;
		readonly [x: symbol]: unknown;
	},
>(
	object: Source,
) => Omit<Source, Properties[number]>;
