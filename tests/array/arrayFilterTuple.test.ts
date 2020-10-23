import { suite } from "@vangware/test";
import { arrayFilterTuple } from "../../src/array/arrayFilterTuple";
import type { FilterTuple } from "../../src/types/FilterTuple";

const array = [0, 1, 2, 3];
const isOne = (item: number) => item === 1;
const filterOne = arrayFilterTuple(isOne);
const isEven = (item: number) => item % 2 === 0;
const filterOddsAndEvens = arrayFilterTuple(isEven);

export default suite([
	{
		given: "an array of numbers and a filter for the number 1",
		must: "return [1, nonMatching]",
		received: filterOne(array),
		wanted: [[1], [0, 2, 3]] as FilterTuple<number | string>
	},
	{
		given: "an array of numbers and a filter for even numbers",
		must: "return [evens, odds]",
		received: filterOddsAndEvens(array),
		wanted: [
			[0, 2],
			[1, 3]
		] as FilterTuple<number>
	}
]);
