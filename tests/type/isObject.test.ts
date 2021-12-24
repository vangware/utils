import { suite } from "@vangware/test";
import { isObject } from "../../src/type/isObject.js";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: isObject(BigInt(1)) && isObject(BigInt("1")),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: isObject(true) && isObject(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: isObject(new Date()),
		...wantedTrue,
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isObject(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: isObject(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: isObject(Promise.resolve()),
		...wantedTrue,
	},
	{
		given: "a regular expression",
		received:
			// eslint-disable-next-line prefer-regex-literals
			isObject(/expression/u) && isObject(new RegExp("expression", "u")),
		...wantedTrue,
	},
	{
		given: "a string",
		received: isObject("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received: isObject(Symbol("description")) && isObject(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: isObject([]),
		...wantedTrue,
	},
	{
		given: "an object",
		received: isObject({}),
		...wantedTrue,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isObject(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: isObject(undefined),
		...wantedFalse,
	},
]);
