/* eslint-disable functional/no-expression-statement */
import test from "ava";
import objectCreate from "./objectCreate";

test("Creates an object with an empty prototype by default", assert => {
	const objectCreateOutput = objectCreate();
	assert.is(objectCreateOutput.hasOwnProperty, undefined);
});

test("Creates an object with given prototype", assert => {
	const objectCreateOutput = objectCreate({ test: "test" }, {});
	assert.is(objectCreateOutput.test, "test");
	assert.not(objectCreateOutput.hasOwnProperty, undefined);
});
