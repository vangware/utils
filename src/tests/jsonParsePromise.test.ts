import { jsonParsePromise } from "../jsonParsePromise";
import { assert } from "./assert";

const key = "key";
const value = "value";

export const jsonParsePromiseAssertions = assert([
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
