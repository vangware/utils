/* eslint-disable functional/no-expression-statement */
import test from "ava";
import noop from "../noop";
import { ARRAY_NUMBER } from "../testConstants";
import arrayMap from "./arrayMap";

test("maps values as expected", t => {
	const TEST_INDEX = Math.floor(ARRAY_NUMBER.length / 2);

	const arrayMapOutput = arrayMap(ARRAY_NUMBER, value => value * 2);
	t.is(arrayMapOutput.length, ARRAY_NUMBER.length);
	t.is(arrayMapOutput[TEST_INDEX], ARRAY_NUMBER[TEST_INDEX] * 2);
});

test("maps even with invalid values", t => {
	const arrayMapOutput = arrayMap(
		(undefined as unknown) as readonly unknown[],
		noop
	);
	t.assert(Array.isArray(arrayMapOutput));
});
