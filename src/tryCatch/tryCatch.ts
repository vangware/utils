import TryCatchFunction from "./TryCatchFunction";

/**
 * Functional try/catch wrapper.
 * @param tryCallback Callback for try.
 * @param catchCallback Callback for catch.
 */
export const tryCatch: TryCatchFunction = (tryCallback, catchCallback?) => {
	let returnedValue;

	try {
		returnedValue = tryCallback();
	} catch (error) {
		returnedValue = catchCallback ? catchCallback(error) : undefined;
	}

	return returnedValue;
};

export default tryCatch;
