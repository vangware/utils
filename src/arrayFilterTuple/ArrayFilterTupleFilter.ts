export type ArrayFilterTupleFilter<ItemType> = (
	item: ItemType,
	index: number,
	array: readonly ItemType[]
) => boolean;

export default ArrayFilterTupleFilter;
