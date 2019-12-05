/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { STRING_1 } from "../testConstants";
import noop from "./noop";

test("Returns the given value without changing it", assert => {
	const noopOutput = noop(STRING_1);
	assert.is(noopOutput, STRING_1);
});
