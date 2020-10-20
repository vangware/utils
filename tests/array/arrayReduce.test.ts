import { suite } from "@vangware/test";
import { arrayReduce } from "../../src/array/arrayReduce";

const array = [0, 1, 2, 3];

export default suite([
	{
		given: "an array of numbers and a sum reducer",
		must: "return the total sum",
		received: arrayReduce((output: number) => (value: number) =>
			output + value
		)(0)(array),
		wanted: 6
	}
]);
