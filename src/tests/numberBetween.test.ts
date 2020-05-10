import { numberBetween } from "../numberBetween";
import { assert } from "./assert";

const maximum = 10;
const minimum = 0;
const boundary = numberBetween(0)(10);
const inside = 5;
const bigger = maximum + 1;
const lower = minimum - 1;

export const entriesAssertions = assert([
	{
		given: "a number inside the boundaries",
		must: "get true",
		received: boundary(inside),
		wanted: true
	},
	{
		given: "a number bigger than the boundaries",
		must: "get false",
		received: boundary(bigger),
		wanted: false
	},
	{
		given: "a number lower than the boundaries",
		must: "get false",
		received: boundary(lower),
		wanted: false
	}
]);
