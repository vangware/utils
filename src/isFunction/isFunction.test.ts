import test from "ava";
import { randomRoundNumber, randomString } from "../tests";
import isFunction from "./isFunction";

test("checks Function correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isFunction(() => undefined));
	// tslint:disable-next-line: only-arrow-functions no-empty space-before-function-paren
	t.assert(isFunction(function() {}));
	t.assert(!isFunction(undefined));
	t.assert(!isFunction([]));
	t.assert(!isFunction({}));
	t.assert(!isFunction(RANDOM_STRING));
	t.assert(!isFunction(RANDOM_NUMBER));
});
