import type { NonPrimitive } from "@vangware/types";

/**
 * Function to encapsulate object mutations.
 *
 * @category Objects
 * @example
 * ```typescript
 * const state = { a: 1 };
 * mutate(set("a")(2))(state);
 * console.log(state); // { a: 2 }
 * ```
 * @param update Update to apply to given target.
 * @returns Curried function with `update` in context.
 */
export const mutate =
	<Update extends NonPrimitive>(update: Update) =>
	<Target extends NonPrimitive>(target: Target) =>
		// eslint-disable-next-line functional/immutable-data
		Object.assign(target, update);
