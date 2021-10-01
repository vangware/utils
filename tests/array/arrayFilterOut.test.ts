import { suite } from "@vangware/test";
import { arrayFilterOut } from "../../src/array/arrayFilterOut";

const array = [0, 1, 2, 3];
const nothing = (_: unknown) => false;
const filterNothing = arrayFilterOut(nothing);
const isEven = (item: number) => item % 2 === 0;
const filterEvensOut = arrayFilterOut(isEven);

export default suite([
	{
		given: "an array of numbers and an always false filter",
		must: "return all elements",
		received: filterNothing(array),
		wanted: array,
	},
	{
		given: "an array of numbers and an even number filter",
		must: "return only odd numbers",
		received: filterEvensOut(array),
		wanted: [1, 3],
	},
]);
