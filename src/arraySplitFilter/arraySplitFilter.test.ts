import test from "ava";
import {
	randomLengthArray,
	randomLengthStringArray,
	randomRoundNumber,
	randomString
} from "../tests";
import arraySplitFilter from "./arraySplitFilter";

test("groups correctly with any length", t => {
	const STRING_1 = randomString();
	const STRING_2 = randomString();
	const ARRAY_1 = randomLengthStringArray(STRING_1);
	const ARRAY_2 = randomLengthStringArray(STRING_2);

	const [matchedArray, unmatchedArray] = arraySplitFilter(
		[...ARRAY_1, ...ARRAY_2],
		value => value === STRING_1
	);
	t.is(matchedArray.length, ARRAY_1.length);
	t.is(unmatchedArray.length, ARRAY_2.length);
});

test("groups correctly with logic", t => {
	const ARRAY_EVEN = randomLengthArray(() => randomRoundNumber(5) * 2);
	const ARRAY_ODD = randomLengthArray(() => randomRoundNumber(5) * 2 + 1);

	const [even, odd] = arraySplitFilter(
		[...ARRAY_EVEN, ...ARRAY_ODD],
		value => value % 2 === 0
	);
	t.is(even.length, ARRAY_EVEN.length);
	t.is(odd.length, ARRAY_ODD.length);
});
