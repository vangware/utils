export type ObjectCreateFunction = <
	Base extends {} = {},
	Prototype extends {} = {}
>(
	base?: Base | {},
	prototype?: Prototype | null
) => Readonly<Base>;

export default ObjectCreateFunction;
