export type ArrayMapMapper<ItemType, OutputType> = (
	value: ItemType,
	index: number,
	array: readonly ItemType[]
) => OutputType;

export default ArrayMapMapper;
