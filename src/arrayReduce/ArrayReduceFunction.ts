import ArrayReduceReducer from "./ArrayReduceReducer";

export type ArrayReduceFunction = <ItemType, OutputType = readonly ItemType[]>(
	array: readonly ItemType[],
	reducer: ArrayReduceReducer<ItemType, OutputType>,
	initialValue: OutputType
) => OutputType;

export default ArrayReduceFunction;
