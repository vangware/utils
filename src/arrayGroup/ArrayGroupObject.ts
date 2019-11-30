export type ArrayGroupObject<ItemType> = {
	readonly [group: string]: readonly ItemType[];
};

export default ArrayGroupObject;
