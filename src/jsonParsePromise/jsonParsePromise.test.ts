/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { STRING_1, STRING_2 } from "../testConstants";
import jsonParsePromise from "./jsonParsePromise";

test("parses invalid without throwing", async t => {
	const jsonParseOutput = await jsonParsePromise(STRING_1).catch(
		_error => undefined
	);
	t.is(jsonParseOutput, undefined);
});

test("parses valid normally", async t => {
	const TEST_OBJECT = { [STRING_1]: STRING_2 };
	const VALID_JSON = JSON.stringify(TEST_OBJECT);

	const jsonParseOutput = await jsonParsePromise<typeof TEST_OBJECT>(
		VALID_JSON
	);
	t.deepEqual(jsonParseOutput, TEST_OBJECT);
});
