export type ArrayReduceReducer<ItemType, OutputType> = (
	previousValue: Readonly<OutputType>,
	item: Readonly<ItemType>,
	index: number,
	array: readonly ItemType[]
) => OutputType;

export default ArrayReduceReducer;
