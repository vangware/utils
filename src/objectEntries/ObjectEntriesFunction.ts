export type ObjectEntriesFunction = <ObjectType>(
	target: ObjectType
) => readonly (readonly [string, Readonly<ObjectType[keyof ObjectType]>])[];

export default ObjectEntriesFunction;
