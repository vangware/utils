export type ArrayPushFunction = <ItemType>(
	array: ItemType[],
	...items: ItemType[]
) => ItemType[];

export default ArrayPushFunction;
