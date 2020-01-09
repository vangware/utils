export type ArrayFilterFilter<ItemType> = (
	item: ItemType,
	index: number,
	array: readonly ItemType[]
) => boolean;

export default ArrayFilterFilter;
