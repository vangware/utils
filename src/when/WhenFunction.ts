import WhenNotNullishCallback from "./WhenNotNullishCallback";
import WhenNullishCallback from "./WhenNullishCallback";

export type WhenFunction = <ValueType = unknown, OutputType = unknown>(
	value: ValueType,
	notNullishCallback: WhenNotNullishCallback<ValueType, OutputType>,
	nullishCallback?: WhenNullishCallback<OutputType>
) => OutputType | undefined;

export default WhenFunction;
