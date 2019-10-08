import WhenFalsyValue from "./WhenFalsyValue";

export type WhenFalsyCallback<ValueType, OutputType> = (
	value: WhenFalsyValue<ValueType>
) => OutputType;

export default WhenFalsyCallback;
