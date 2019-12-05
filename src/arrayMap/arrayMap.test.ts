/* eslint-disable functional/no-expression-statement */
import test from "ava";
import noop from "../noop";
import { ARRAY_NUMBER } from "../testConstants";
import arrayMap from "./arrayMap";

test("maps values as expected", assert => {
	const TEST_INDEX = Math.floor(ARRAY_NUMBER.length / 2);

	const arrayMapOutput = arrayMap(ARRAY_NUMBER, value => value * 2);
	assert.is(arrayMapOutput.length, ARRAY_NUMBER.length);
	assert.is(arrayMapOutput[TEST_INDEX], ARRAY_NUMBER[TEST_INDEX] * 2);
});

test("maps even with invalid values", assert => {
	const arrayMapOutput = arrayMap(
		(undefined as unknown) as readonly unknown[],
		noop
	);
	assert.true(Array.isArray(arrayMapOutput));
});
