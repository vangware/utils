import TryCatchCatch from "./TryCatchCatch";

export type TryCatchFunction = <ReturnedValue, ErrorType = unknown>(
	tryCallback: () => ReturnedValue,
	catchCallback?: TryCatchCatch<ReturnedValue, ErrorType>
) => ReturnedValue | undefined;

export default TryCatchFunction;
