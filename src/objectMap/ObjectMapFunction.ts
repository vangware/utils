import ObjectMapMapper from "./ObjectMapMapper";

export type ObjectMapFunction = <
	ObjectType,
	OutputType = ObjectType[keyof ObjectType]
>(
	targetObject: ObjectType,
	mapper: ObjectMapMapper<ObjectType, OutputType>
) => OutputType[];

export default ObjectMapFunction;