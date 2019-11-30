/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isBigInt from "./isBigInt";

test("checks BigInt correctly", t => {
	t.assert(isBigInt(BigInt(1)));
	t.assert(isBigInt(BigInt("1")));
	t.assert(!isBigInt(undefined));
	t.assert(!isBigInt(EMPTY_ARRAY));
	t.assert(!isBigInt(EMPTY_OBJECT));
	t.assert(!isBigInt(STRING_1));
	t.assert(!isBigInt(NUMBER));
});
