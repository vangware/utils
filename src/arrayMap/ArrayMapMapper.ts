export type ArrayMapMapper<ItemType, OutputType> = (
	value: Readonly<ItemType>,
	index: number,
	array: readonly ItemType[]
) => OutputType;

export default ArrayMapMapper;
