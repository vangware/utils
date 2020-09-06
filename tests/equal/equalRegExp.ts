import { test } from "@vangware/test";
import { equalRegExp } from "../../src/equal/equalRegExp";

const regExp = new RegExp(/./gu);
const regExpCopy = new RegExp(/./gu);
const otherRegExp = new RegExp(/other/gu);

export default test([
	{
		given: "two equal regular expressions",
		must: "return true",
		received: equalRegExp(regExp)(regExpCopy),
		wanted: true
	},
	{
		given: "two different regular expressions",
		must: "return false",
		received: equalRegExp(regExp)(otherRegExp),
		wanted: false
	},
	{
		given: "a regular expression and a number",
		must: "return false",
		received: equalRegExp(regExp)(0),
		wanted: false
	},
	{
		given: "a number and a regular expression",
		must: "return false",
		received: equalRegExp(0)(regExp),
		wanted: false
	},
	{
		given: "two numbers",
		must: "return false",
		received: equalRegExp(0)(0),
		wanted: false
	}
]);
