/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY } from "../constants";
import { ARRAY_EVEN, ARRAY_NUMBER } from "../testConstants";
import arrayFilter from "./arrayFilter";

test("works without filter", assert => {
	const arrayFilterOutput = arrayFilter(ARRAY_NUMBER);
	assert.is(arrayFilterOutput.length, ARRAY_NUMBER.length);
	assert.deepEqual(arrayFilterOutput, ARRAY_NUMBER);
});

test("works with an always false filter", assert => {
	const arrayFilterOutput = arrayFilter(ARRAY_NUMBER, _item => false);
	assert.is(arrayFilterOutput.length, 0);
});

test("works with an actual filter", assert => {
	const arrayFilterOutput = arrayFilter(ARRAY_NUMBER, item => item % 2 === 0);
	assert.is(arrayFilterOutput.length, ARRAY_EVEN.length);
});

test("works when target is not an array", assert => {
	const arrayFilterOutput = arrayFilter(
		(undefined as unknown) as readonly unknown[]
	);
	assert.deepEqual(arrayFilterOutput, EMPTY_ARRAY);
});
