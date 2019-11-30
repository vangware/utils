export type ArraySplitFunction = <ItemType>(
	array: readonly ItemType[],
	length: number,
	vertical?: boolean
) => readonly (readonly ItemType[])[];

export default ArraySplitFunction;
