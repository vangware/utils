/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { ARRAY_NUMBER, STRING_1 } from "../testConstants";
import arrayInsert from "./arrayInsert";

test("adds one item correctly", t => {
	const INSERT_POSITION = Math.floor(ARRAY_NUMBER.length / 2);
	const INSERT_STRING = STRING_1;

	const arrayInsertOutput = arrayInsert<string | number>(
		ARRAY_NUMBER,
		INSERT_POSITION,
		INSERT_STRING
	);
	t.is(arrayInsertOutput[INSERT_POSITION], INSERT_STRING);
	t.is(arrayInsertOutput.length, ARRAY_NUMBER.length + 1);
	t.notDeepEqual(arrayInsertOutput, ARRAY_NUMBER);
});

test("adds one from the end item when value is negative", t => {
	const INSERT_STRING = STRING_1;

	const arrayInsertOutput = arrayInsert<string | number>(
		ARRAY_NUMBER,
		-1,
		INSERT_STRING
	);
	t.is(arrayInsertOutput[arrayInsertOutput.length - 2], INSERT_STRING);
	t.is(arrayInsertOutput.length, ARRAY_NUMBER.length + 1);
	t.notDeepEqual(arrayInsertOutput, ARRAY_NUMBER);
});

test("adds multiple items correctly", t => {
	const INSERT_POSITION = Math.floor(ARRAY_NUMBER.length / 2);

	const arrayInsertOutput = arrayInsert<string | number>(
		ARRAY_NUMBER,
		INSERT_POSITION,
		STRING_1
	);
	t.assert(
		arrayInsertOutput.slice(INSERT_POSITION, INSERT_POSITION + 1)[0] ===
			STRING_1
	);
	t.is(arrayInsertOutput.length, ARRAY_NUMBER.length + 1);
	t.notDeepEqual(arrayInsertOutput, ARRAY_NUMBER);
});
