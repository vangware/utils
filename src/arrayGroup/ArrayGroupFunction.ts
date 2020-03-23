import type ArrayGroupGrouper from "./ArrayGroupGrouper";
import type ArrayGroupObject from "./ArrayGroupObject";

export type ArrayGroupFunction = <ItemType>(
	target: readonly ItemType[],
	grouper: ArrayGroupGrouper<ItemType>
) => ArrayGroupObject<ItemType>;

export default ArrayGroupFunction;
