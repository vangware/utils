import type ArrayFilterFilter from "./ArrayFilterFilter";

export type ArrayFilterFunction = <ItemType>(
	target: readonly ItemType[],
	filter?: ArrayFilterFilter<ItemType>
) => readonly ItemType[];

export default ArrayFilterFunction;
