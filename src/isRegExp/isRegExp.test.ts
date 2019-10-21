import test from "ava";
import { randomRoundNumber, randomString } from "../tests";
import isRegExp from "./isRegExp";

test("checks Promise correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isRegExp(/./));
	t.assert(isRegExp(new RegExp(".")));
	t.assert(!isRegExp(undefined));
	t.assert(!isRegExp({}));
	t.assert(!isRegExp(RANDOM_STRING));
	t.assert(!isRegExp(RANDOM_NUMBER));
});
