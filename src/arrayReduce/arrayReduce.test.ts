/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY } from "../constants";
import noop from "../noop";
import { ARRAY_NUMBER } from "../testConstants";
import arrayReduce from "./arrayReduce";

test("reduces values as expected", t => {
	const TEST_INDEX = Math.floor(ARRAY_NUMBER.length / 2);

	const arrayReduceOutput = arrayReduce(
		ARRAY_NUMBER,
		(output, value) => [...output, value * 2],
		EMPTY_ARRAY as readonly number[]
	);
	t.is(arrayReduceOutput.length, ARRAY_NUMBER.length);
	t.is(arrayReduceOutput[TEST_INDEX], ARRAY_NUMBER[TEST_INDEX] * 2);
});

test("reduces even with invalid values", t => {
	const arrayReduceOutput = arrayReduce(
		(undefined as unknown) as readonly unknown[],
		noop,
		true
	);
	t.assert(arrayReduceOutput);
});
