export type ObjectEntriesFunction = <ObjectType>(
	target: ObjectType
) => readonly (readonly [string, ObjectType[keyof ObjectType]])[];

export default ObjectEntriesFunction;
