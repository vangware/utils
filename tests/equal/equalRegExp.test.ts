import type { Tests } from "@vangware/test";
import { equalRegExp } from "../../src/equal/equalRegExp.js";

const regExp = /./gu;
const regExpCopy = /./gu;
const otherRegExp = /other/gu;

export default [
	{
		given: "two equal regular expressions",
		must: "return true",
		received: equalRegExp(regExp)(regExpCopy),
		wanted: true,
	},
	{
		given: "two different regular expressions",
		must: "return false",
		received: equalRegExp(regExp)(otherRegExp),
		wanted: false,
	},
	{
		given: "a regular expression and a number",
		must: "return false",
		received: equalRegExp(regExp)(0),
		wanted: false,
	},
	{
		given: "a number and a regular expression",
		must: "return false",
		received: equalRegExp(0)(regExp),
		wanted: false,
	},
	{
		given: "two numbers",
		must: "return false",
		received: equalRegExp(0)(0),
		wanted: false,
	},
] as Tests<boolean>;
