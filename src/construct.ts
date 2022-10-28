import type { GenericConstructor, ReadOnlyArray } from "@vangware/types";

/**
 * Creates a new instance of the given constructor with the given arguments.
 *
 * @category Classes
 * @example
 * ```typescript
 * const constructDate = construct(Date);
 *
 * constructDate(); // Returns the current Date (like `new Date()`).
 * ```
 * @returns Curried function with `constructor` in context.
 */
export const construct =
	<Constructor extends GenericConstructor>(constructor: Constructor) =>
	(...constructorArguments: ConstructorParameters<Constructor>) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		new constructor(
			...(constructorArguments as unknown as ReadOnlyArray<never>),
		) as InstanceType<Constructor>;