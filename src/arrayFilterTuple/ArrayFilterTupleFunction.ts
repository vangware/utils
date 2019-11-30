import ArrayFilterTupleFilter from "./ArrayFilterTupleFilter";

export type ArrayFilterTupleFunction = <ItemType>(
	target: readonly ItemType[],
	filter: ArrayFilterTupleFilter<ItemType>
) => readonly [readonly ItemType[], readonly ItemType[]];

export default ArrayFilterTupleFunction;
