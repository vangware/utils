import WhenFalsyCallback from "./WhenFalsyCallback";
import WhenTruthyCallback from "./WhenTruthyCallback";

export type WhenFunction = <ValueType = unknown, OutputType = unknown>(
	value: ValueType,
	truthyCallback: WhenTruthyCallback<ValueType, OutputType>,
	falsyCallback?: WhenFalsyCallback<ValueType, OutputType>
) => OutputType | undefined;

export default WhenFunction;
