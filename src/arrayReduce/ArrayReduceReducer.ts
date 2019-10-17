export type ArrayReduceReducer<ItemType, OutputType> = (
	previousValue: OutputType,
	value: ItemType,
	index: number,
	array: ItemType[]
) => OutputType;

export default ArrayReduceReducer;
