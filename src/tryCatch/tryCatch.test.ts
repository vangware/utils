import test from "ava";
import { randomString } from "../testUtils";
import tryCatch from "./tryCatch";

test("returns correct types", t => {
	const ERROR_MESSAGE = randomString();

	const tryCatchOutput = tryCatch<string, Error>(
		() => {
			throw new Error(ERROR_MESSAGE);
		},
		error => (error ? error.message : "")
	);
	t.is(tryCatchOutput, ERROR_MESSAGE);
});
