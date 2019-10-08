import test from "ava";
import { spy } from "sinon";
import { randomRoundNumber, randomString } from "../testUtils";
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
	const FALSY_STRING = "";
	const SPY = spy();

	t.is(
		when(FALSY_NUMBER, SPY, value => {
			t.is(value, FALSY_NUMBER);

			return value;
		}),
		FALSY_NUMBER
	);
	t.is(
		when(FALSY_STRING, SPY, value => {
			t.is(value, FALSY_STRING);

			return value;
		}),
		FALSY_STRING
	);
	t.assert(SPY.notCalled);
});
