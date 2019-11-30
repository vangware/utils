export type ArrayReplaceFunction = <ItemType>(
	array: readonly ItemType[],
	index: number,
	item: ItemType
) => readonly ItemType[];

export default ArrayReplaceFunction;
