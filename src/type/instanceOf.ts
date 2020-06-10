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
 * @template Argument Expected arguments of constructor.
 * @template Output Expected output of constructor.
 * @param constructor Constructor used to check.
 * @returns Curried function with `constructor` in context.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const instanceOf = <Expected = unknown>(constructor: Function) =>
	/**
	 * @template Actual Actual type of the entity.
	 * @param entity Entity to check.
	 * @returns `true` if `entity` is `instanceof` given `constructor`.
	 */
	<Actual = unknown>(entity: Actual | Expected): entity is Expected =>
		entity instanceof constructor;

export default instanceOf;
