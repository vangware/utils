import { suite } from "@vangware/test";
import { arraySlice } from "../../src/array/arraySlice.js";

const array = [0, 1, 2, 3];

export default suite([
	{
		given: "an array of numbers",
		must: "return a slice of it",
		received: arraySlice(1)(3)(array),
		wanted: [1, 2],
	},
]);
