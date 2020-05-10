import { isArray } from "./isArray";
import { isObject } from "./isObject";

/**
 * Takes a `source` object and returns a frozen copy of it.
 *
 * @example
 * ```typescript
 * const source = { key: "value" };
 * const frozen = objectFreeze(source);
 *
 * source.key = "other value"; // ok
 * frozen.key = "other value"; // error
 * ```
 * @template Source Type of the source object.
 * @param source Source object to return frozen.
 * @returns Frozen copy of source object.
 */
export const objectFreeze = <Source>(source: Source): Readonly<Source> =>
	isObject(source)
		? Object.freeze(
				isArray(source)
					? ([...source] as typeof source)
					: // eslint-disable-next-line no-null/no-null
					  Object.assign(Object.create(null), source)
		  )
		: source;
