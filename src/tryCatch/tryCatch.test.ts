import test from "ava";
import tryCatch from "./tryCatch";

test("returns correct types", t => {
	const ERROR_MESSAGE = "TEST";

	const tryCatchOutput = tryCatch<string>(
		() => {
			throw new Error(ERROR_MESSAGE);
		},
		error => (error as Error).message
	);
	t.is(tryCatchOutput, ERROR_MESSAGE);
});
