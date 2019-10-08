export type ArrayInsertFunction = <ItemType>(
	array: ItemType[],
	index: number,
	...items: ItemType[]
) => ItemType[];

export default ArrayInsertFunction;
