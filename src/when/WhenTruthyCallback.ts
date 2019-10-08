import WhenTruthyValue from "./WhenTruthyValue";

export type WhenTruthyCallback<ValueType, OutputType> = (
	value: WhenTruthyValue<ValueType>
) => OutputType;

export default WhenTruthyCallback;
