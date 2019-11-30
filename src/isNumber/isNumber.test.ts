/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isNumber from "./isNumber";

test("checks Number correctly", t => {
	t.assert(isNumber(NUMBER));
	t.assert(isNumber(Number.POSITIVE_INFINITY));
	t.assert(isNumber(Number.NEGATIVE_INFINITY));
	t.assert(isNumber(NaN));
	t.assert(!isNumber(undefined));
	t.assert(!isNumber(EMPTY_ARRAY));
	t.assert(!isNumber(EMPTY_OBJECT));
	t.assert(!isNumber(STRING_1));
});
