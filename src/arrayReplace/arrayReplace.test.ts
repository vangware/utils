/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { ARRAY_NUMBER, STRING_1 } from "../testConstants";
import arrayReplace from "./arrayReplace";

test("adds one item correctly", assert => {
	const REPLACE_POSITION = Math.floor(ARRAY_NUMBER.length / 2);
	const REPLACE_STRING = STRING_1;

	const arrayReplaceOutput = arrayReplace<string | number>(
		ARRAY_NUMBER,
		REPLACE_POSITION,
		REPLACE_STRING
	);
	assert.is(arrayReplaceOutput[REPLACE_POSITION], REPLACE_STRING);
	assert.is(arrayReplaceOutput.length, ARRAY_NUMBER.length);
	assert.notDeepEqual(arrayReplaceOutput, ARRAY_NUMBER);
});

test("adds one item from the end when value is negative", assert => {
	const REPLACE_STRING = STRING_1;

	const arrayReplaceOutput = arrayReplace<string | number>(
		ARRAY_NUMBER,
		-1,
		REPLACE_STRING
	);
	assert.is(
		arrayReplaceOutput[arrayReplaceOutput.length - 1],
		REPLACE_STRING
	);
	assert.is(arrayReplaceOutput.length, ARRAY_NUMBER.length);
	assert.notDeepEqual(arrayReplaceOutput, ARRAY_NUMBER);
});
