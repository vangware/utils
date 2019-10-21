import test from "ava";
import { randomRoundNumber, randomString } from "../tests";
import isObject from "./isObject";

test("checks Object correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isObject({}));
	t.assert(isObject([]));
	// tslint:disable-next-line: no-null-keyword
	t.assert(!isObject(null));
	t.assert(!isObject(undefined));
	t.assert(!isObject(RANDOM_NUMBER));
	t.assert(!isObject(RANDOM_STRING));
});
