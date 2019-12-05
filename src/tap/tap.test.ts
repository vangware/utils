/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { spy } from "sinon";
import { STRING_1 } from "../testConstants";
import tap from "./tap";

test("taps to value", assert => {
	const SPY = spy();

	const tapOutput = tap<string>(value => {
		SPY(value);

		return value;
	});

	assert.is(tapOutput(STRING_1), STRING_1);
	assert.true(SPY.calledWith(STRING_1));
});
