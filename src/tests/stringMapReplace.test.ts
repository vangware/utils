import { stringMapReplace } from "../stringMapReplace";
import { assert } from "./assert";

const string1 = "string1";
const string2 = "string2";

export const stringMapReplaceAssertions = assert([
	{
		given: "a simple string and a replace map",
		must: "replace the string parts based on that map",
		received: stringMapReplace({
			[string2]: string1
		})(`${string1}${string2}`),
		wanted: `${string1}${string1}`
	},
	{
		given: "a simple string and an empty replace map",
		must: "return the same string",
		received: stringMapReplace({})(string1),
		wanted: string1
	}
]);
