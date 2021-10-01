import { suite } from "@vangware/test";
import { arrayFrom } from "../../src/array/arrayFrom";

const string = "string";

export default suite([
	{
		given: "a string",
		must: "return an array of it's characters",
		received: arrayFrom(string),
		wanted: ["s", "t", "r", "i", "n", "g"],
	},
]);
