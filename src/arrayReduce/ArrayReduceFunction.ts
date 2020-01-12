import ArrayReduceReducer from "./ArrayReduceReducer";

export type ArrayReduceFunction = <ItemType, OutputType = readonly ItemType[]>(
	target: readonly ItemType[],
	reducer: ArrayReduceReducer<ItemType, OutputType>,
	initialValue: OutputType
) => Readonly<OutputType>;

export default ArrayReduceFunction;
