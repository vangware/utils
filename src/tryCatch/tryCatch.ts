/**
 * Functional try/catch wrapper.
 * @param tryCallback Callback for try.
 * @param catchCallback Callback for catch.
 */
export const tryCatch = <ReturnedValue>(
	tryCallback: () => ReturnedValue,
	catchCallback?: (error?: unknown) => ReturnedValue | undefined
): ReturnedValue | undefined => {
	let returnedValue: ReturnedValue | undefined;
	try {
		returnedValue = tryCallback();
	} catch (error) {
		returnedValue = catchCallback ? catchCallback(error) : undefined;
	}

	return returnedValue;
};

export default tryCatch;
