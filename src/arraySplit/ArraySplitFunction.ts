export type ArraySplitFunction = <ItemType>(
	target: readonly ItemType[],
	length: number,
	vertical?: boolean
) => readonly (readonly ItemType[])[];

export default ArraySplitFunction;
