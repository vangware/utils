import { isUndefined } from "../isUndefined";
import { assert } from "./assert";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export const isUndefinedAssertions = assert([
	{
		given: "a BigInt",
		received: isUndefined(BigInt(1)) && isUndefined(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isUndefined(true) && isUndefined(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isUndefined(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isUndefined(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isUndefined(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isUndefined(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			isUndefined(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isUndefined(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isUndefined("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received: isUndefined(Symbol("description")) && isUndefined(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isUndefined([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isUndefined({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isUndefined(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isUndefined(undefined),
		...wantedTrue
	}
]);