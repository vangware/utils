/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { spy } from "sinon";
import { STRING_1 } from "../testConstants";
import tap from "./tap";

test("taps to value", t => {
	const SPY = spy();

	const tapOutput = tap<string>(value => {
		SPY(value);

		return value;
	});

	t.is(tapOutput(STRING_1), STRING_1);
	t.assert(SPY.calledWith(STRING_1));
});
