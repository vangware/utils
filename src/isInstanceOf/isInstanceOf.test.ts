/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { ARRAY_NUMBER, STRING_1, STRING_2 } from "../testConstants";
import isInstanceOf from "./isInstanceOf";

test("works as expected", t => {
	t.assert(isInstanceOf({ [STRING_1]: STRING_2 }, Object));
	t.assert(isInstanceOf(ARRAY_NUMBER, Array));
	t.assert(isInstanceOf([STRING_1, STRING_2], Array));
});
