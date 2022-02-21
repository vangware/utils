import type { Tests } from "@vangware/test";
import type { ReadOnlyRecord } from "@vangware/types";
import { jsonParsePromise } from "../../src/json/jsonParsePromise.js";

const key = "key";
const value = "value";

export default [
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
] as Tests<ReadOnlyRecord<string> | string>;
