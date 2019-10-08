import ArrayMapMapper from "./ArrayMapMapper";

export type ArrayMapFunction = <ItemType, OutputType = ItemType>(
	array: ItemType[],
	mapper: ArrayMapMapper<ItemType, OutputType>
) => OutputType[];

export default ArrayMapFunction;
