export type ArrayPushFunction = <ItemType>(
	array: readonly ItemType[],
	item: ItemType
) => readonly ItemType[];

export default ArrayPushFunction;
