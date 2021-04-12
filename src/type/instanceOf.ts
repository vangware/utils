/**
 * Takes a `constructor` and checks if given `entity` is an instance of it.
 *
 * @example
 * ```typescript
 * const isInstanceOfArray = instanceOf(Array)
 *
 * isInstanceOfArray([]); // true
 * isInstanceOfArray({}); // false
 * ```
 * @template Expected Expected type.
 * @param constructor Constructor used to check.
 * @returns Curried function with `constructor` in context.
 */
export const instanceOf = <Expected = unknown>(
	constructor: new (..._arguments: ReadonlyArray<never>) => unknown
) =>
	/**
	 * @template Actual Actual type of the entity.
	 * @param entity Entity to check.
	 * @returns `true` if `entity` is `instanceof` given `constructor`.
	 */
	<Actual = unknown>(entity: Actual | Expected): entity is Expected =>
		entity instanceof constructor;
