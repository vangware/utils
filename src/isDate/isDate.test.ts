/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isDate from "./isDate";

test("checks Date correctly", t => {
	t.assert(isDate(new Date()));
	t.assert(!isDate(undefined));
	t.assert(!isDate(EMPTY_OBJECT));
	t.assert(!isDate(STRING_1));
	t.assert(!isDate(NUMBER));
});
