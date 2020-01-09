export type ObjectCreateFunction = <Prototype extends {} = {}>(
	prototype?: Prototype | null
) => Prototype;

export default ObjectCreateFunction;
