export type ArrayReplaceFunction = <ItemType>(
	target: readonly ItemType[],
	index: number,
	item: ItemType
) => readonly ItemType[];

export default ArrayReplaceFunction;
