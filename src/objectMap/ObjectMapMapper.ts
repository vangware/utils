export type ObjectMapMapper<
	ObjectType,
	OutputType = ObjectType[keyof ObjectType]
> = (
	value: Readonly<ObjectType[keyof ObjectType]>,
	key: string,
	targetObject: Readonly<ObjectType>
) => OutputType;

export default ObjectMapMapper;
