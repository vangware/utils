import test from "ava";
import {
	randomLengthNumberArray,
	randomLengthStringArray,
	randomRoundNumber,
	randomString
} from "../testUtils";
import arrayReplace from "./arrayReplace";

test("adds one item correctly", t => {
	const NUMBER_ARRAY = randomLengthNumberArray();
	const REPLACE_POSITION = randomRoundNumber(NUMBER_ARRAY.length - 1);
	const REPLACE_STRING = randomString();

	const arrayReplaceOutput = arrayReplace<string | number>(
		NUMBER_ARRAY,
		REPLACE_POSITION,
		REPLACE_STRING
	);
	t.is(arrayReplaceOutput[REPLACE_POSITION], REPLACE_STRING);
	t.is(arrayReplaceOutput.length, NUMBER_ARRAY.length);
	t.notDeepEqual(arrayReplaceOutput, NUMBER_ARRAY);
});

test("adds multiple items correctly", t => {
	const NUMBER_ARRAY = randomLengthNumberArray();
	const REPLACE_POSITION = randomRoundNumber(NUMBER_ARRAY.length - 1);
	const REPLACE_STRINGS = randomLengthStringArray();

	const arrayReplaceOutput = arrayReplace<string | number>(
		NUMBER_ARRAY,
		REPLACE_POSITION,
		...REPLACE_STRINGS
	);
	t.deepEqual(
		arrayReplaceOutput.slice(
			REPLACE_POSITION,
			REPLACE_POSITION + REPLACE_STRINGS.length
		),
		REPLACE_STRINGS
	);
	t.is(
		arrayReplaceOutput.length,
		Math.max(NUMBER_ARRAY.length, REPLACE_POSITION + REPLACE_STRINGS.length)
	);
	t.notDeepEqual(arrayReplaceOutput, NUMBER_ARRAY);
});
