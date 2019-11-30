/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isArray from "./isArray";

test("checks Array correctly", t => {
	t.assert(isArray(EMPTY_ARRAY));
	// eslint-disable-next-line @typescript-eslint/no-array-constructor
	t.assert(isArray(new Array()));
	t.assert(!isArray(undefined));
	t.assert(!isArray(EMPTY_OBJECT));
	t.assert(!isArray(STRING_1));
	t.assert(!isArray(NUMBER));
});
