export type ArrayInsertFunction = <ItemType>(
	target: readonly ItemType[],
	index: number,
	item: ItemType
) => readonly ItemType[];

export default ArrayInsertFunction;
