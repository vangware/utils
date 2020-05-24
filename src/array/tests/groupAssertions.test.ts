import { assert } from "../../assert";
import { Grouped } from "../../types/Grouped";
import { group } from "../group";

const string1 = "string1";
const string2 = "string2";
const stringArray = [string1, string2, string1, string2];
const numberArray = [0, 1, 2, 3];

export const groupAssertions = assert<Grouped<string | number>>([
	{
		given: "an array of strings and a grouper by string",
		must: "group by the string in the array",
		received: group<string>(groupName => groupName)(stringArray),
		wanted: { [string1]: [string1, string1], [string2]: [string2, string2] }
	},
	{
		given: "an array of numbers and a grouper by even/odd",
		must: "group bu evens/odss",
		received: group<number>(value => (value % 2 === 0 ? "even" : "odd"))(
			numberArray
		),
		wanted: { even: [0, 2], odd: [1, 3] }
	}
]);
