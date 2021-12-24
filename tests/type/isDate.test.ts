import { suite } from "@vangware/test";
import { isDate } from "../../src/type/isDate.js";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: isDate(BigInt(1)) && isDate(BigInt("1")),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: isDate(true) && isDate(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: isDate(new Date()),
		...wantedTrue,
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isDate(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: isDate(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: isDate(Promise.resolve()),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received:
			// eslint-disable-next-line prefer-regex-literals
			isDate(/expression/u) && isDate(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: isDate("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received: isDate(Symbol("description")) && isDate(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: isDate([]),
		...wantedFalse,
	},
	{
		given: "an object",
		received: isDate({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isDate(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: isDate(undefined),
		...wantedFalse,
	},
]);
