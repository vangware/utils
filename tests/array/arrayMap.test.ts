import { suite } from "@vangware/test";
import { arrayMap } from "../../src/array/arrayMap";

const array = [0, 1, 2, 3];

export default suite([
	{
		given: "an array of numbers and a map that doubles",
		must: "get an array with all values duplicated",
		received: arrayMap((value: number) => value * 2)(array),
		wanted: [0, 2, 4, 6],
	},
]);
