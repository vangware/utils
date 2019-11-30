/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { spy } from "sinon";
import noop from "../noop";
import { STRING_1 } from "../testConstants";
import when from "./when";

test("works with not nullish values", t => {
	const NUMBER = 1;
	const SPY = spy();

	t.is(
		when(
			NUMBER,
			value => {
				t.is(value, NUMBER);

				return value;
			},
			SPY
		),
		NUMBER
	);
	t.is(
		when(
			STRING_1,
			value => {
				t.is(value, STRING_1);

				return value;
			},
			SPY
		),
		STRING_1
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
