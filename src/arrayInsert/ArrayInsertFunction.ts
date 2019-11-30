export type ArrayInsertFunction = <ItemType>(
	array: readonly ItemType[],
	index: number,
	item: ItemType
) => readonly ItemType[];

export default ArrayInsertFunction;
