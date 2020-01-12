export type TapObserver<ValueType> = (
	value: Readonly<ValueType>
) => Readonly<ValueType>;

export default TapObserver;
