import test from "ava";
import { randomLengthNumberArray, randomRoundNumber } from "../tests";
import arrayMap from "./arrayMap";

test("maps values as expected", t => {
	const NUMBERS_ARRAY = randomLengthNumberArray();
	const TEST_INDEX = randomRoundNumber(NUMBERS_ARRAY.length - 1);

	const arrayMapOutput = arrayMap(NUMBERS_ARRAY, value => value * 2);
	t.is(arrayMapOutput.length, NUMBERS_ARRAY.length);
	t.is(arrayMapOutput[TEST_INDEX], NUMBERS_ARRAY[TEST_INDEX] * 2);
});

test("maps even with invalid values", t => {
	const arrayMapOutput = arrayMap(
		(undefined as unknown) as unknown[],
		value => value
	);
	t.assert(Array.isArray(arrayMapOutput));
});
