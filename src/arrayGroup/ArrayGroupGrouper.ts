export type ArrayGroupGrouper<ItemType> = (
	item: Readonly<ItemType>,
	index: number,
	array: readonly ItemType[]
) => string | number;

export default ArrayGroupGrouper;
