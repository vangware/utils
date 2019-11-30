/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isNullish from "./isNullish";

test("checks null and undefined correctly", t => {
	// eslint-disable-next-line no-null/no-null
	t.assert(isNullish(null));
	t.assert(isNullish(undefined));
	t.assert(!isNullish(EMPTY_ARRAY));
	t.assert(!isNullish(EMPTY_OBJECT));
	t.assert(!isNullish(STRING_1));
	t.assert(!isNullish(NUMBER));
});
