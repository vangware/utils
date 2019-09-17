import test from "ava";
import {
	randomLengthArray,
	randomLengthStringArray,
	randomRoundNumber,
	randomString
} from "../testUtils";
import arrayGroup from "./arrayGroup";

test("groups correctly with any length", t => {
	const STRING_1 = randomString();
	const STRING_2 = randomString();
	const ARRAY_1 = randomLengthStringArray(STRING_1);
	const ARRAY_2 = randomLengthStringArray(STRING_2);

	const arrayGroupOutput = arrayGroup(
		[...ARRAY_1, ...ARRAY_2],
		value => value
	);
	t.is(arrayGroupOutput[STRING_1].length, ARRAY_1.length);
	t.is(arrayGroupOutput[STRING_2].length, ARRAY_2.length);
});

test("groups correctly with logic", t => {
	const ARRAY_EVEN = randomLengthArray(() => randomRoundNumber(5) * 2);
	const ARRAY_ODD = randomLengthArray(() => randomRoundNumber(5) * 2 + 1);

	const arrayGroupOutput = arrayGroup([...ARRAY_EVEN, ...ARRAY_ODD], value =>
		value % 2 === 0 ? "even" : "odd"
	);
	t.is(arrayGroupOutput.even.length, ARRAY_EVEN.length);
	t.is(arrayGroupOutput.odd.length, ARRAY_ODD.length);
});
