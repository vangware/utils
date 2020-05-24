import { assert } from "../../assert";
import { isArray } from "../isArray";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export const isArrayAssertions = assert([
	{
		given: "a BigInt",
		received: isArray(BigInt(1)) && isArray(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isArray(true) && isArray(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isArray(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isArray(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isArray(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isArray(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			// eslint-disable-next-line prefer-regex-literals
			isArray(/expression/u) && isArray(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isArray("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received: isArray(Symbol("description")) && isArray(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isArray([]),
		...wantedTrue
	},
	{
		given: "an object",
		received: isArray({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isArray(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isArray(undefined),
		...wantedFalse
	}
]);
