import TryCatchFunction from "./TryCatchFunction";

/**
 * Functional try/catch wrapper.
 *
 * @param tryCallback - Callback for try.
 * @param catchCallback - Callback for catch.
 * @returns The returned value of the tryCallback or catchCallback.
 */
export const tryCatch: TryCatchFunction = (tryCallback, catchCallback) => {
	try {
		return tryCallback();
	} catch (error) {
		return catchCallback?.(error);
	}
};

export default tryCatch;
