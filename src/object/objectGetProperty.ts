/**
 * Get value of given property for given source object.
 *
 * @example
 * ```typescript
 * const getFoo = objectGet("foo");
 * getFoo({ foo: 1 }); // 1
 * getFoo({ bar: 1 }); // undefined
 * ```
 * @template Property Type of the property.
 * @param property Name of property.
 * @returns Curried function with `property` in context.
 */
export const objectGetProperty = <Property extends number | string | symbol>(
	property: Property
) =>
	/**
	 * @template Source Type of the source object (must contain property).
	 * @param source Source object to get the property from.
	 * @returns Value of the given property.
	 */
	<Source extends Record<number | string | symbol, unknown>>(
		source: Source
	) => source[property];
