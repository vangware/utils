import { suite } from "@vangware/test";
import { numberBoundary } from "../../src/number/numberBoundary.js";

const maximum = 10;
const minimum = 0;
const testBoundary = numberBoundary(0)(10);
const inside = 5;
const bigger = maximum + 1;
const lower = minimum - 1;

export default suite([
	{
		given: "a number inside the boundaries",
		must: "get the same number",
		received: testBoundary(inside),
		wanted: inside,
	},
	{
		given: "a number bigger than the boundaries",
		must: "get the maximum boundary",
		received: testBoundary(bigger),
		wanted: maximum,
	},
	{
		given: "a number lower than the boundaries",
		must: "get the minimum boundary",
		received: testBoundary(lower),
		wanted: minimum,
	},
]);
