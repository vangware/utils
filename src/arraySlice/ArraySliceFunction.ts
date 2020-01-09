export type ArraySliceFunction = <ItemType>(
	target: readonly ItemType[],
	start?: number,
	end?: number
) => readonly ItemType[];

export default ArraySliceFunction;
