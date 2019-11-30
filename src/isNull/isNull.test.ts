/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isNull from "./isNull";

test("checks null correctly", t => {
	// eslint-disable-next-line no-null/no-null
	t.assert(isNull(null));
	t.assert(!isNull(undefined));
	t.assert(!isNull(EMPTY_ARRAY));
	t.assert(!isNull(EMPTY_OBJECT));
	t.assert(!isNull(STRING_1));
	t.assert(!isNull(NUMBER));
});
