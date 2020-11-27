/**
 * Set value of given property in given source object.
 *
 * @example
 * ```typescript
 * const setFoo = objectSet("foo")("bar");
 * setFoo({ foo: 1 }); // { foo: "bar" }
 * setFoo({ bar: 1 }); // { bar: 1, foo: "bar" }
 * ```
 * @template Property Type of the property.
 * @param property Name of property.
 * @returns Curried function with `property` in context.
 */
export const objectSetProperty = <Property extends number | string | symbol>(
	property: Property
) => <Value>(value: Value) =>
	/**
	 * @template Source Type of the source object (must contain property).
	 * @param source Source object to get the property from.
	 * @returns Value of the given property.
	 */
	<Source extends Record<number | string | symbol, unknown>>(
		source: Source
	) =>
		({
			...source,
			[property]: value
		} as Omit<Source, Property> & { readonly [P in Property]: Value });
