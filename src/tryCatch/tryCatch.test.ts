import test from "ava";
import { EMPTY_STRING } from "../constants";
import { randomString } from "../tests";
import tryCatch from "./tryCatch";

test("returns correct types", t => {
	const ERROR_MESSAGE = randomString();

	const tryCatchOutput = tryCatch<string, Error>(
		() => {
			throw new Error(ERROR_MESSAGE);
		},
		error => (error ? error.message : EMPTY_STRING)
	);
	t.is(tryCatchOutput, ERROR_MESSAGE);
});
