import type ArrayFilterFilter from "../arrayFilter/ArrayFilterFilter";

export type ArrayFilterTupleFunction = <ItemType>(
	target: readonly ItemType[],
	filter: ArrayFilterFilter<ItemType>
) => readonly [readonly ItemType[], readonly ItemType[]];

export default ArrayFilterTupleFunction;
