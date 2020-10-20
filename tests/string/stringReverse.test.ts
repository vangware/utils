import { suite } from "@vangware/test";
import { stringReverse } from "../../src/string/stringReverse";

const string = "string";

export default suite([
	{
		given: "a simple string",
		must: "return the string reversed",
		received: stringReverse(string),
		wanted: "gnirts"
	}
]);
