export type ArraySplitFunction = <ItemType>(
	array: ItemType[],
	length: number,
	vertical?: boolean
) => ItemType[][];

export default ArraySplitFunction;
