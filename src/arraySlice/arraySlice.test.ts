/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY } from "../constants";
import { ARRAY_NUMBER } from "../testConstants";
import arraySlice from "./arraySlice";

test("works without start and end", assert => {
	const arraySliceOutput = arraySlice(ARRAY_NUMBER);
	assert.is(arraySliceOutput.length, ARRAY_NUMBER.length);
	assert.deepEqual(arraySliceOutput, ARRAY_NUMBER);
});

test("works without end", assert => {
	const arraySliceOutput = arraySlice(ARRAY_NUMBER, 1);
	assert.is(arraySliceOutput.length, ARRAY_NUMBER.length - 1);
});

test("works with start and end", assert => {
	const arraySliceOutput = arraySlice(ARRAY_NUMBER, 1, 2);
	assert.is(arraySliceOutput.length, 1);
});

test("works when target is not an array", assert => {
	const arraySliceOutput = arraySlice(
		(undefined as unknown) as readonly unknown[],
		1,
		2
	);
	assert.deepEqual(arraySliceOutput, EMPTY_ARRAY);
});
