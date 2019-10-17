import test from "ava";
import { randomLengthNumberArray, randomRoundNumber } from "../testUtils";
import arraySplit from "./arraySplit";

test("split horizontal works as expected", t => {
	const NUMBER_ARRAY = randomLengthNumberArray(10, 5);
	const ARRAY_LENGTH = randomRoundNumber(NUMBER_ARRAY.length - 1, 2);

	const arraySplitOutput = arraySplit(NUMBER_ARRAY, ARRAY_LENGTH);

	t.is(arraySplitOutput[0].length, ARRAY_LENGTH);
	t.is(arraySplitOutput[0][0], NUMBER_ARRAY[0]);
	t.is(arraySplitOutput[0][ARRAY_LENGTH - 1], NUMBER_ARRAY[ARRAY_LENGTH - 1]);
});

test("split vertical works as expected", t => {
	const NUMBER_ARRAY = randomLengthNumberArray(10, 5);
	const ARRAY_LENGTH = randomRoundNumber(NUMBER_ARRAY.length - 1, 2);

	const arraySplitOutput = arraySplit(NUMBER_ARRAY, ARRAY_LENGTH, true);

	t.is(arraySplitOutput.length, ARRAY_LENGTH);
	t.is(arraySplitOutput[0][0], NUMBER_ARRAY[0]);
	t.is(arraySplitOutput[ARRAY_LENGTH - 1][0], NUMBER_ARRAY[ARRAY_LENGTH - 1]);
});
