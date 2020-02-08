import { entryKey } from "./entryKey.js";
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
export const pick =
	(...properties) =>
	object =>
		Object.fromEntries(
			Object.entries(object).filter(entry =>
				properties.includes(entryKey(entry)),
			),
		);
