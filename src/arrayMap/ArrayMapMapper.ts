export type ArrayMapMapper<ItemType, OutputType> = (
	value: ItemType,
	index: number,
	array: ItemType[]
) => OutputType;

export default ArrayMapMapper;
