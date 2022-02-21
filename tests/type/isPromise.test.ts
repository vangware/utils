import type { Tests } from "@vangware/test";
import { isPromise } from "../../src/type/isPromise.js";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default [
	{
		given: "a BigInt",
		received: isPromise(BigInt(1)) && isPromise(BigInt("1")),
		...wantedFalse,
	},
	{
		given: "a boolean",
		received: isPromise(true) && isPromise(false),
		...wantedFalse,
	},
	{
		given: "a date",
		received: isPromise(new Date()),
		...wantedFalse,
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isPromise(() => undefined),
		...wantedFalse,
	},
	{
		given: "a number",
		received: isPromise(1),
		...wantedFalse,
	},
	{
		given: "a promise",
		received: isPromise(Promise.resolve()),
		...wantedTrue,
	},
	{
		given: "a regular expression",
		received:
			isPromise(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isPromise(new RegExp("expression", "u")),
		...wantedFalse,
	},
	{
		given: "a string",
		received: isPromise("string"),
		...wantedFalse,
	},
	{
		given: "a symbol",
		received: isPromise(Symbol("description")) && isPromise(Symbol(1)),
		...wantedFalse,
	},
	{
		given: "an array",
		received: isPromise([]),
		...wantedFalse,
	},
	{
		given: "an object",
		received: isPromise({}),
		...wantedFalse,
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isPromise(null),
		...wantedFalse,
	},
	{
		given: "undefined",
		received: isPromise(undefined),
		...wantedFalse,
	},
] as Tests<boolean>;
