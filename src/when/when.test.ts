import test from "ava";
import { spy } from "sinon";
import noop from "../noop";
import { randomRoundNumber, randomString } from "../tests";
import when from "./when";

test("works with not nullish values", t => {
	const RANDOM_NUMBER = randomRoundNumber(10, 1);
	const RANDOM_STRING = randomString();
	const SPY = spy();

	t.is(
		when(
			RANDOM_NUMBER,
			value => {
				t.is(value, RANDOM_NUMBER);

				return value;
			},
			SPY
		),
		RANDOM_NUMBER
	);
	t.is(
		when(
			RANDOM_STRING,
			value => {
				t.is(value, RANDOM_STRING);

				return value;
			},
			SPY
		),
		RANDOM_STRING
	);
	t.assert(SPY.notCalled);
});

test("works with nullish values", t => {
	const SPY = spy();

	// eslint-disable-next-line no-null/no-null
	t.is(when(null, noop, SPY), undefined);
	t.is(when(undefined, noop, SPY), undefined);
	t.is(when(undefined, noop), undefined);
	t.assert(SPY.calledTwice);
});
