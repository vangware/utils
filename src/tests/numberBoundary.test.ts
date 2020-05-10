import { numberBoundary } from "../numberBoundary";
import { assert } from "./assert";

const maximum = 10;
const minimum = 0;
const boundary = numberBoundary(0)(10);
const inside = 5;
const bigger = maximum + 1;
const lower = minimum - 1;

export const entriesAssertions = assert([
	{
		given: "a number inside the boundaries",
		must: "get the same number",
		received: boundary(inside),
		wanted: inside
	},
	{
		given: "a number bigger than the boundaries",
		must: "get the maximum boundary",
		received: boundary(bigger),
		wanted: maximum
	},
	{
		given: "a number lower than the boundaries",
		must: "get the minimum boundary",
		received: boundary(lower),
		wanted: minimum
	}
]);
