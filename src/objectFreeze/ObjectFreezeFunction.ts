export type ObjectFreezeFunction = <TargetType>(
	target: TargetType
) => Readonly<TargetType>;

export default ObjectFreezeFunction;
