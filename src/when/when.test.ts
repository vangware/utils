import test from "ava";
import { spy } from "sinon";
import { EMPTY_STRING } from "../constants";
import noop from "../noop";
import { randomRoundNumber, randomString } from "../tests";
import when from "./when";

test("works with truthy values", t => {
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

test("works with falsy values", t => {
	const FALSY_NUMBER = 0;
	const SPY = spy();

	t.is(
		when(FALSY_NUMBER, SPY, value => {
			t.is(value, FALSY_NUMBER);

			return value;
		}),
		FALSY_NUMBER
	);
	t.is(
		when(EMPTY_STRING, SPY, value => {
			t.is(value, EMPTY_STRING);

			return value;
		}),
		EMPTY_STRING
	);
	t.assert(SPY.notCalled);
});

test("works with undefined falsy callback", t => {
	const FALSY_NUMBER = 0;

	t.is(when(FALSY_NUMBER, noop), undefined);
	t.is(when(EMPTY_STRING, noop), undefined);
});
