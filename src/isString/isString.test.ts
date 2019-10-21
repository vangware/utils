import test from "ava";
import { randomRoundNumber, randomString } from "../tests";
import isString from "./isString";

test("checks String correctly", t => {
	const RANDOM_STRING = randomString();
	const RANDOM_NUMBER = randomRoundNumber(10);

	t.assert(isString(RANDOM_STRING));
	t.assert(isString(""));
	t.assert(!isString(undefined));
	t.assert(!isString([]));
	t.assert(!isString({}));
	t.assert(!isString(RANDOM_NUMBER));
});
