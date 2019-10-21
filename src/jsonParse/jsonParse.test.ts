import test from "ava";
import { randomString } from "../tests";
import jsonParse from "./jsonParse";

test("parses invalid without throwing", t => {
	const INVALID_JSON = randomString();

	const jsonParseOutput = jsonParse(INVALID_JSON);
	t.is(jsonParseOutput, undefined);
});

test("parses valid normally", t => {
	const TEST_OBJECT = { valid: true };
	const VALID_JSON = JSON.stringify(TEST_OBJECT);

	const jsonParseOutput = jsonParse<typeof TEST_OBJECT>(VALID_JSON);
	t.deepEqual(jsonParseOutput, TEST_OBJECT);
});
