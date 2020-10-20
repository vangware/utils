import { suite } from "@vangware/test";
import { ReadOnlyObjectArray } from "../../src";
import { arrayFlat } from "../../src/array/arrayFlat";

const arrayFlat1 = arrayFlat(1);
const arrayFlat2 = arrayFlat(2);
const array = [
	[0, 1],
	[2, 3]
];
const arrayDeeper = [array, array];

export default suite<ReadOnlyObjectArray<number | readonly number[]>>([
	{
		given: "an array of arrays and a depth of 1",
		must: "return a flattened array",
		received: arrayFlat1(array),
		wanted: [0, 1, 2, 3]
	},
	{
		given: "an array arrays of arrays and a depth of 1",
		must: "return an array of arrays",
		received: arrayFlat1(arrayDeeper),
		wanted: [
			[0, 1],
			[2, 3],
			[0, 1],
			[2, 3]
		]
	},
	{
		given: "an array arrays of arrays and a depth of 2",
		must: "return a flattened array",
		received: arrayFlat2(arrayDeeper),
		wanted: [0, 1, 2, 3, 0, 1, 2, 3]
	}
]);
