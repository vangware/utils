import test from "ava";
import { spy } from "sinon";
import { randomString } from "../tests";
import tap from "./tap";

test("taps to value", t => {
	const STRING = randomString();
	const SPY = spy();

	const tapOutput = tap<string>(SPY);

	t.is(tapOutput(STRING), STRING);
	t.assert(SPY.called);
});
