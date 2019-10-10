import ArrayGroupGrouper from "./ArrayGroupGrouper";
import ArrayGroupObject from "./ArrayGroupObject";

export type ArrayGroupFunction = <ItemType>(
	array: ItemType[],
	grouper: ArrayGroupGrouper<ItemType>
) => ArrayGroupObject<ItemType>;

export default ArrayGroupFunction;