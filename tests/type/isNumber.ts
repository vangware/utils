import { test } from "@vangware/test";
import { isNumber } from "../../src/type/isNumber";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "a BigInt",
		received: isNumber(BigInt(1)) && isNumber(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isNumber(true) && isNumber(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isNumber(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isNumber(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isNumber(1),
		...wantedTrue
	},
	{
		given: "a promise",
		received: isNumber(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			// eslint-disable-next-line prefer-regex-literals
			isNumber(/expression/u) && isNumber(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isNumber("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received: isNumber(Symbol("description")) && isNumber(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isNumber([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isNumber({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isNumber(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isNumber(undefined),
		...wantedFalse
	}
]);
