import test from "ava";
import {
	randomLengthNumberArray,
	randomLengthStringArray,
	randomRoundNumber,
	randomString
} from "../testUtils";
import arrayInsert from "./arrayInsert";

test("adds one item correctly", t => {
	const NUMBER_ARRAY = randomLengthNumberArray();
	const INSERT_POSITION = randomRoundNumber(NUMBER_ARRAY.length - 1);
	const INSERT_STRING = randomString();

	const arrayInsertOutput = arrayInsert<string | number>(
		NUMBER_ARRAY,
		INSERT_POSITION,
		INSERT_STRING
	);
	t.is(arrayInsertOutput[INSERT_POSITION], INSERT_STRING);
	t.is(arrayInsertOutput.length, NUMBER_ARRAY.length + 1);
	t.notDeepEqual(arrayInsertOutput, NUMBER_ARRAY);
});

test("adds one from the end item when value is negative", t => {
	const NUMBER_ARRAY = randomLengthNumberArray(10, 5);
	const INSERT_STRING = randomString();

	const arrayInsertOutput = arrayInsert<string | number>(
		NUMBER_ARRAY,
		-1,
		INSERT_STRING
	);
	t.is(arrayInsertOutput[arrayInsertOutput.length - 2], INSERT_STRING);
	t.is(arrayInsertOutput.length, NUMBER_ARRAY.length + 1);
	t.notDeepEqual(arrayInsertOutput, NUMBER_ARRAY);
});

test("adds multiple items correctly", t => {
	const NUMBER_ARRAY = randomLengthNumberArray();
	const INSERT_POSITION = randomRoundNumber(NUMBER_ARRAY.length - 1);
	const INSERT_STRINGS = randomLengthStringArray();

	const arrayInsertOutput = arrayInsert<string | number>(
		NUMBER_ARRAY,
		INSERT_POSITION,
		...INSERT_STRINGS
	);
	t.deepEqual(
		arrayInsertOutput.slice(
			INSERT_POSITION,
			INSERT_POSITION + INSERT_STRINGS.length
		),
		INSERT_STRINGS
	);
	t.is(arrayInsertOutput.length, NUMBER_ARRAY.length + INSERT_STRINGS.length);
	t.notDeepEqual(arrayInsertOutput, NUMBER_ARRAY);
});
