/* eslint-disable functional/no-expression-statement */
import test from "ava";
import noop from "../noop";
import { ARRAY_EVEN, ARRAY_ODD, STRING_1, STRING_2 } from "../testConstants";
import arrayGroup from "./arrayGroup";

test("groups correctly with any length", assert => {
	const ARRAY_1 = [STRING_1, STRING_1, STRING_1];
	const ARRAY_2 = [STRING_2, STRING_2, STRING_2];

	const arrayGroupOutput = arrayGroup([...ARRAY_1, ...ARRAY_2], noop);
	assert.is(arrayGroupOutput[STRING_1].length, ARRAY_1.length);
	assert.is(arrayGroupOutput[STRING_2].length, ARRAY_2.length);
});

test("groups correctly with logic", assert => {
	const arrayGroupOutput = arrayGroup([...ARRAY_EVEN, ...ARRAY_ODD], value =>
		value % 2 === 0 ? "even" : "odd"
	);
	assert.is(arrayGroupOutput.even.length, ARRAY_EVEN.length);
	assert.is(arrayGroupOutput.odd.length, ARRAY_ODD.length);
});
