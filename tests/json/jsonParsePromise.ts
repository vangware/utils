import { test } from "@vangware/test";
import { jsonParsePromise } from "../../src/json/jsonParsePromise";

const key = "key";
const value = "value";

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "an invalid JSON string",
		must: "catch without throwing",
		received: jsonParsePromise("invalid").catch(_ => value),
		wanted: value
	},
	{
		given: "a valid JSON string",
		must: "parse it",
		received: jsonParsePromise(`{"${key}":"${value}"}`),
		wanted: { [key]: value }
	}
]);
