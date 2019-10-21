import test from "ava";
import { randomRoundNumber, randomString } from "../tests";
import isArray from "./isArray";

test("checks Array correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isArray([]));
	t.assert(isArray(new Array()));
	t.assert(!isArray(undefined));
	t.assert(!isArray({}));
	t.assert(!isArray(RANDOM_STRING));
	t.assert(!isArray(RANDOM_NUMBER));
});
