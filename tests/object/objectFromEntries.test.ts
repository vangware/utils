import { suite } from "@vangware/test";
import { objectFromEntries } from "../../src/object/objectFromEntries";

const key = "key";
const value = "value";

export default suite([
	{
		given: "an array of entries [key, value]",
		must: "return an object with the shape { key: value }",
		received: objectFromEntries<Record<typeof key, typeof value>>([
			[key, value],
		]),
		wanted: { [key]: value },
	},
]);
