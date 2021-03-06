import { suite } from "@vangware/test";
import { isRegExp } from "../../src/type/isRegExp";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: isRegExp(BigInt(1)) && isRegExp(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isRegExp(true) && isRegExp(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isRegExp(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isRegExp(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isRegExp(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isRegExp(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			// eslint-disable-next-line prefer-regex-literals
			isRegExp(/expression/u) && isRegExp(new RegExp("expression", "u")),
		...wantedTrue
	},
	{
		given: "a string",
		received: isRegExp("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received: isRegExp(Symbol("description")) && isRegExp(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isRegExp([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isRegExp({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isRegExp(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isRegExp(undefined),
		...wantedFalse
	}
]);
