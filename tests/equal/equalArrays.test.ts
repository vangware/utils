import { suite } from "@vangware/test";
import { equal } from "../../src/equal/equal.js";
import { equalArrays } from "../../src/equal/equalArrays.js";

const array = [0, 1, 2, 3];
const arrayCopy = [...array];
const otherArray = [4, 5, 6, 7];
const arrayCopyWithExtras = [...array, ...otherArray];

export default suite([
	{
		given: "two arrays with the same items",
		must: "return true",
		received: equalArrays(equal)(array)(arrayCopy),
		wanted: true,
	},
	{
		given: "two arrays with different items",
		must: "return false",
		received: equalArrays(equal)(array)(otherArray),
		wanted: false,
	},
	{
		given: "two arrays almost equal",
		must: "return false",
		received: equalArrays(equal)(array)(arrayCopyWithExtras),
		wanted: false,
	},
	{
		given: "an array and a number",
		must: "return false",
		received: equalArrays(equal)(array)(0),
		wanted: false,
	},
	{
		given: "a number and an array",
		must: "return false",
		received: equalArrays(equal)(0)(array),
		wanted: false,
	},
	{
		given: "two numbers",
		must: "return false",
		received: equalArrays(equal)(0)(0),
		wanted: false,
	},
]);
