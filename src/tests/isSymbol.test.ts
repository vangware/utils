import { isSymbol } from "../isSymbol";
import { assert } from "./assert";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export const isSymbolAssertions = assert([
	{
		given: "a BigInt",
		received: isSymbol(BigInt(1)) && isSymbol(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isSymbol(true) && isSymbol(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isSymbol(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isSymbol(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isSymbol(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isSymbol(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			// eslint-disable-next-line prefer-regex-literals
			isSymbol(/expression/u) && isSymbol(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isSymbol("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received: isSymbol(Symbol("description")) && isSymbol(Symbol(1)),
		...wantedTrue
	},
	{
		given: "an array",
		received: isSymbol([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isSymbol({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isSymbol(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isSymbol(undefined),
		...wantedFalse
	}
]);
