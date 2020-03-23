import type WhenNotNullishCallback from "./WhenNotNullishCallback";
import type WhenNullishCallback from "./WhenNullishCallback";

export type WhenFunction = <ValueType = unknown, OutputType = unknown>(
	value: ValueType,
	notNullishCallback: WhenNotNullishCallback<ValueType, OutputType>,
	nullishCallback?: WhenNullishCallback<OutputType>
) => OutputType | undefined;

export default WhenFunction;
