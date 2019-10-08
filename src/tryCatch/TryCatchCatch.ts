export type TryCatchCatch<ReturnedValue, ErrorType = unknown> = (
	error?: ErrorType
) => ReturnedValue | undefined;

export default TryCatchCatch;
