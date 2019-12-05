/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { STRING_1, STRING_2 } from "../testConstants";
import jsonParsePromise from "./jsonParsePromise";

test("parses invalid without throwing", async assert => {
	const jsonParseOutput = await jsonParsePromise(STRING_1).catch(
		_error => undefined
	);
	assert.is(jsonParseOutput, undefined);
});

test("parses valid normally", async assert => {
	const TEST_OBJECT = { [STRING_1]: STRING_2 };
	const VALID_JSON = JSON.stringify(TEST_OBJECT);

	const jsonParseOutput = await jsonParsePromise<typeof TEST_OBJECT>(
		VALID_JSON
	);
	assert.deepEqual(jsonParseOutput, TEST_OBJECT);
});
