export type ArrayReduceReducer<ItemType, OutputType> = (
	previousValue: OutputType,
	value: ItemType,
	index: number,
	array: readonly ItemType[]
) => OutputType;

export default ArrayReduceReducer;
