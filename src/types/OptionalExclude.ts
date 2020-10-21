/**
 * Excludes only if it doesn't return `never`. Fallback to `Exclusion`.
 *
 * @template Type Type to apply exclusion on.
 * @template Exclusion Exclusion object.
 */
export type OptionalExclude<Type, Exclusion> = Exclude<
	Type,
	Exclusion
> extends never
	? Exclusion
	: Exclude<Type, Exclusion>;
