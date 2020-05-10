import { isNull } from "../isNull";
import { assert } from "./assert";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export const isNullAssertions = assert([
	{
		given: "a BigInt",
		received: isNull(BigInt(1)) && isNull(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isNull(true) && isNull(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isNull(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isNull(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isNull(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isNull(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			// eslint-disable-next-line prefer-regex-literals
			isNull(/expression/u) && isNull(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isNull("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received: isNull(Symbol("description")) && isNull(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isNull([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isNull({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isNull(null),
		...wantedTrue
	},
	{
		given: "undefined",
		received: isNull(undefined),
		...wantedFalse
	}
]);