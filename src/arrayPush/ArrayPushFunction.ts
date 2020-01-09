export type ArrayPushFunction = <ItemType>(
	target: readonly ItemType[],
	item: ItemType
) => readonly ItemType[];

export default ArrayPushFunction;
