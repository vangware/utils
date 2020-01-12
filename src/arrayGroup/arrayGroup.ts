import arrayPush from "../arrayPush";
import arrayReduce from "../arrayReduce";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import objectFreeze from "../objectFreeze";
import ArrayGroupFunction from "./ArrayGroupFunction";
import ArrayGroupObject from "./ArrayGroupObject";

/**
 * Creates object with properties grouped by grouper function.
 *
 * @param target - Target array.
 * @param grouper - Grouper function (returns the group name).
 * @returns An object with the shape `{ [group]: [items] }`.
 */
export const arrayGroup: ArrayGroupFunction = (target, grouper) => {
	const frozenTarget = objectFreeze(target);

	return objectFreeze(
		arrayReduce(
			target,
			(groups, item, index) => {
				const group = `${grouper(
					objectFreeze(item),
					index,
					frozenTarget
				)}`;

				return {
					...groups,
					[group]: arrayPush(groups[group] ?? EMPTY_ARRAY, item)
				};
			},
			EMPTY_OBJECT as ArrayGroupObject<typeof target[number]>
		)
	);
};

export default arrayGroup;
