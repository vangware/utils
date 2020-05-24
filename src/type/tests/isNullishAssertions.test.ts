import { assert } from "../../assert";
import { isNullish } from "../isNullish";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export const isNullishAssertions = assert([
	{
		given: "a BigInt",
		received: isNullish(BigInt(1)) && isNullish(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isNullish(true) && isNullish(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isNullish(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isNullish(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isNullish(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isNullish(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			isNullish(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isNullish(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isNullish("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received: isNullish(Symbol("description")) && isNullish(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isNullish([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isNullish({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isNullish(null),
		...wantedTrue
	},
	{
		given: "undefined",
		received: isNullish(undefined),
		...wantedTrue
	}
]);
