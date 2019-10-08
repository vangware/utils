export type ArraySplitFilterFilter<ItemType> = (
	item: ItemType,
	index: number,
	array: ItemType[]
) => boolean;

export default ArraySplitFilterFilter;
