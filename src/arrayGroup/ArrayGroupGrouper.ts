export type ArrayGroupGrouper<ItemType> = (
	item: ItemType,
	index: number,
	array: readonly ItemType[]
) => string | number;

export default ArrayGroupGrouper;
