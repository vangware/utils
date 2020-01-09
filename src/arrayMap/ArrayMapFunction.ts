import ArrayMapMapper from "./ArrayMapMapper";

export type ArrayMapFunction = <ItemType, OutputType = ItemType>(
	target: readonly ItemType[],
	mapper: ArrayMapMapper<ItemType, OutputType>
) => readonly OutputType[];

export default ArrayMapFunction;
