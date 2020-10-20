import { suite } from "@vangware/test";
import { arraySort } from "../../src/array/arraySort";

const numberArray = [3, 0, 2, 1];
const stringArray = ["b", "a", "c"];
const numberSorter = (next: number) => (item: number) => next - item;
const stringSorter = (next: string) => (item: string) => (next > item ? 1 : -1);
const numberArraySort = arraySort(numberSorter);
const stringArraySort = arraySort(stringSorter);

export default suite<readonly (number | string)[]>([
	{
		given: "an array of unsorted numbers",
		must: "get an array with sorted numbers",
		received: numberArraySort(numberArray),
		wanted: [0, 1, 2, 3]
	},
	{
		given: "an array of unsorted strings",
		must: "get an array with sorted strings",
		received: stringArraySort(stringArray),
		wanted: ["a", "b", "c"]
	},
	{
		given: "an array of unsorted numbers",
		must: "not change the original array",
		received: numberArray,
		wanted: [3, 0, 2, 1]
	}
]);
