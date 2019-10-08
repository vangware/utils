export type ArrayReplaceFunction = <ItemType>(
	array: ItemType[],
	index: number,
	...items: ItemType[]
) => ItemType[];

export default ArrayReplaceFunction;
