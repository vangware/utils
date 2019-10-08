export type ObjectMapMapper<
	ObjectType,
	OutputType = ObjectType[keyof ObjectType]
> = (
	value: ObjectType[keyof ObjectType],
	key: string,
	targetObject: ObjectType
) => OutputType;

export default ObjectMapMapper;
