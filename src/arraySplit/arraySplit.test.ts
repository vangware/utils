/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { ARRAY_NUMBER } from "../testConstants";
import arraySplit from "./arraySplit";

test("split horizontal works as expected", t => {
	const ARRAY_LENGTH = Math.floor(ARRAY_NUMBER.length / 2);

	const arraySplitOutput = arraySplit(ARRAY_NUMBER, ARRAY_LENGTH);

	t.is(arraySplitOutput[0].length, ARRAY_LENGTH);
	t.is(arraySplitOutput[0][0], ARRAY_NUMBER[0]);
	t.is(arraySplitOutput[0][ARRAY_LENGTH - 1], ARRAY_NUMBER[ARRAY_LENGTH - 1]);
});

test("split vertical works as expected", t => {
	const ARRAY_LENGTH = Math.floor(ARRAY_NUMBER.length / 2);

	const arraySplitOutput = arraySplit(ARRAY_NUMBER, ARRAY_LENGTH, true);

	t.is(arraySplitOutput.length, ARRAY_LENGTH);
	t.is(arraySplitOutput[0][0], ARRAY_NUMBER[0]);
	t.is(arraySplitOutput[ARRAY_LENGTH - 1][0], ARRAY_NUMBER[ARRAY_LENGTH - 1]);
});
