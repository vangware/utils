/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { spy } from "sinon";
import noop from "../noop";
import { STRING_1 } from "../testConstants";
import when from "./when";

test("works with not nullish values", assert => {
	const NUMBER = 1;
	const SPY = spy();

	assert.is(
		when(
			NUMBER,
			value => {
				assert.is(value, NUMBER);

				return value;
			},
			SPY
		),
		NUMBER
	);
	assert.is(
		when(
			STRING_1,
			value => {
				assert.is(value, STRING_1);

				return value;
			},
			SPY
		),
		STRING_1
	);
	assert.true(SPY.notCalled);
});

test("works with nullish values", assert => {
	const SPY = spy();

	// eslint-disable-next-line no-null/no-null
	assert.is(when(null, noop, SPY), undefined);
	assert.is(when(undefined, noop, SPY), undefined);
	assert.is(when(undefined, noop), undefined);
	assert.true(SPY.calledTwice);
});
