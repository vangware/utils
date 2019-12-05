/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { ARRAY_EVEN, ARRAY_ODD, STRING_1, STRING_2 } from "../testConstants";
import arrayFilterTuple from "./arrayFilterTuple";

test("groups correctly with any length", assert => {
	const ARRAY_1 = [STRING_1, STRING_1, STRING_1];
	const ARRAY_2 = [STRING_2, STRING_2, STRING_2];

	const [matchedArray, unmatchedArray] = arrayFilterTuple(
		[...ARRAY_1, ...ARRAY_2],
		value => value === STRING_1
	);
	assert.is(matchedArray.length, ARRAY_1.length);
	assert.is(unmatchedArray.length, ARRAY_2.length);
});

test("groups correctly with logic", assert => {
	const [even, odd] = arrayFilterTuple(
		[...ARRAY_EVEN, ...ARRAY_ODD],
		value => value % 2 === 0
	);
	assert.is(even.length, ARRAY_EVEN.length);
	assert.is(odd.length, ARRAY_ODD.length);
});
