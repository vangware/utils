import { test } from "@vangware/test";
import { equalDates } from "../../src/equal/equalDates";

const date = new Date(624286800000);
const dateCopy = new Date(date.getTime());
const otherDate = new Date(0);

export default test([
	{
		given: "two equal dates",
		must: "return true",
		received: equalDates(date)(dateCopy),
		wanted: true
	},
	{
		given: "two different dates",
		must: "return false",
		received: equalDates(date)(otherDate),
		wanted: false
	},
	{
		given: "a date and a number",
		must: "return false",
		received: equalDates(date)(0),
		wanted: false
	},
	{
		given: "a number and a date",
		must: "return false",
		received: equalDates(0)(date),
		wanted: false
	},
	{
		given: "two numbers",
		must: "return false",
		received: equalDates(0)(0),
		wanted: false
	}
]);
