/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { ARRAY_NUMBER, STRING_1 } from "../testConstants";
import arrayInsert from "./arrayInsert";

test("adds one item correctly", assert => {
	const INSERT_POSITION = Math.floor(ARRAY_NUMBER.length / 2);
	const INSERT_STRING = STRING_1;

	const arrayInsertOutput = arrayInsert<string | number>(
		ARRAY_NUMBER,
		INSERT_POSITION,
		INSERT_STRING
	);
	assert.is(arrayInsertOutput[INSERT_POSITION], INSERT_STRING);
	assert.is(arrayInsertOutput.length, ARRAY_NUMBER.length + 1);
	assert.notDeepEqual(arrayInsertOutput, ARRAY_NUMBER);
});

test("adds one item from the end when value is negative", assert => {
	const INSERT_STRING = STRING_1;

	const arrayInsertOutput = arrayInsert<string | number>(
		ARRAY_NUMBER,
		-1,
		INSERT_STRING
	);
	assert.is(arrayInsertOutput[arrayInsertOutput.length - 2], INSERT_STRING);
	assert.is(arrayInsertOutput.length, ARRAY_NUMBER.length + 1);
	assert.notDeepEqual(arrayInsertOutput, ARRAY_NUMBER);
});
