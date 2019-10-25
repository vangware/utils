import test from "ava";
import { randomString } from "../tests";
import jsonParsePromise from "./jsonParsePromise";

test("parses invalid without throwing", async t => {
	const INVALID_JSON = randomString();

	const jsonParseOutput = await jsonParsePromise(INVALID_JSON).catch(
		() => undefined
	);
	t.is(jsonParseOutput, undefined);
});

test("parses valid normally", async t => {
	const TEST_OBJECT = { [randomString()]: randomString() };
	const VALID_JSON = JSON.stringify(TEST_OBJECT);

	const jsonParseOutput = await jsonParsePromise<typeof TEST_OBJECT>(
		VALID_JSON
	);
	t.deepEqual(jsonParseOutput, TEST_OBJECT);
});
