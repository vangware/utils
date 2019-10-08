import ArraySplitFilterFilter from "./ArraySplitFilterFilter";

export type ArraySplitFilterFunction = <ItemType>(
	target: ItemType[],
	filter: ArraySplitFilterFilter<ItemType>
) => [ItemType[], ItemType[]];

export default ArraySplitFilterFunction;
