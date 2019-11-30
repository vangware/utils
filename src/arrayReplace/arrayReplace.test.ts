/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { ARRAY_NUMBER, STRING_1 } from "../testConstants";
import arrayReplace from "./arrayReplace";

test("adds one item correctly", t => {
	const REPLACE_POSITION = Math.floor(ARRAY_NUMBER.length / 2);
	const REPLACE_STRING = STRING_1;

	const arrayReplaceOutput = arrayReplace<string | number>(
		ARRAY_NUMBER,
		REPLACE_POSITION,
		REPLACE_STRING
	);
	t.is(arrayReplaceOutput[REPLACE_POSITION], REPLACE_STRING);
	t.is(arrayReplaceOutput.length, ARRAY_NUMBER.length);
	t.notDeepEqual(arrayReplaceOutput, ARRAY_NUMBER);
});

test("adds one from the end item when value is negative", t => {
	const REPLACE_STRING = STRING_1;

	const arrayReplaceOutput = arrayReplace<string | number>(
		ARRAY_NUMBER,
		-1,
		REPLACE_STRING
	);
	t.is(arrayReplaceOutput[arrayReplaceOutput.length - 1], REPLACE_STRING);
	t.is(arrayReplaceOutput.length, ARRAY_NUMBER.length);
	t.notDeepEqual(arrayReplaceOutput, ARRAY_NUMBER);
});

test("adds multiple items correctly", t => {
	const REPLACE_POSITION = Math.floor(ARRAY_NUMBER.length / 2);

	const arrayReplaceOutput = arrayReplace<string | number>(
		ARRAY_NUMBER,
		REPLACE_POSITION,
		STRING_1
	);
	t.assert(
		arrayReplaceOutput.slice(REPLACE_POSITION, REPLACE_POSITION + 1)[0] ===
			STRING_1
	);
	t.is(arrayReplaceOutput.length, ARRAY_NUMBER.length);
	t.notDeepEqual(arrayReplaceOutput, ARRAY_NUMBER);
});
