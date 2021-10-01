import { suite } from "@vangware/test";
import { jsonParsePromise } from "../../src/json/jsonParsePromise";

const key = "key";
const value = "value";

export default suite([
	{
		given: "an invalid JSON string",
		must: "catch without throwing",
		received: jsonParsePromise("invalid").catch(_ => value),
		wanted: value,
	},
	{
		given: "a valid JSON string",
		must: "parse it",
		received: jsonParsePromise(`{"${key}":"${value}"}`),
		wanted: { [key]: value },
	},
]);
