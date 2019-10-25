import test from "ava";
import { EMPTY_ARRAY } from "../constants";
import { randomLengthNumberArray, randomRoundNumber } from "../tests";
import arrayReduce from "./arrayReduce";

test("reduces values as expected", t => {
	const NUMBERS_ARRAY = randomLengthNumberArray();
	const TEST_INDEX = randomRoundNumber(NUMBERS_ARRAY.length - 1);

	const arrayReduceOutput = arrayReduce(
		NUMBERS_ARRAY,
		(output, value) => [...output, value * 2],
		EMPTY_ARRAY as number[]
	);
	t.is(arrayReduceOutput.length, NUMBERS_ARRAY.length);
	t.is(arrayReduceOutput[TEST_INDEX], NUMBERS_ARRAY[TEST_INDEX] * 2);
});

test("reduces even with invalid values", t => {
	const arrayReduceOutput = arrayReduce(
		(undefined as unknown) as unknown[],
		value => value,
		true
	);
	t.assert(arrayReduceOutput);
});
