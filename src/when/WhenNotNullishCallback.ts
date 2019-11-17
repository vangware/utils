export type WhenNotNullishCallback<ValueType, OutputType> = (
	value: NonNullable<ValueType>
) => OutputType;

export default WhenNotNullishCallback;
