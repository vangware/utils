import ArrayReduceReducer from "./ArrayReduceReducer";

export type ArrayReduceFunction = <ItemType, OutputType = ItemType[]>(
	array: ItemType[],
	reducer: ArrayReduceReducer<ItemType, OutputType>,
	initialValue: OutputType
) => OutputType;

export default ArrayReduceFunction;
