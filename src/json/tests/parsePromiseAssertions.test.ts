import { assert } from "../../assert";
import { parsePromise } from "../parsePromise";

const key = "key";
const value = "value";

export const parsePromiseAssertions = assert([
	{
		given: "an invalid JSON string",
		must: "catch without throwing",
		received: parsePromise("invalid").catch(_ => value),
		wanted: value
	},
	{
		given: "a valid JSON string",
		must: "parse it",
		received: parsePromise(`{"${key}":"${value}"}`),
		wanted: { [key]: value }
	}
]);
