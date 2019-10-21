import test from "ava";
import { randomRoundNumber, randomString } from "../tests";
import isMap from "./isMap";

test("checks Map correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isMap(new Map()));
	t.assert(!isMap(undefined));
	t.assert(!isMap({}));
	t.assert(!isMap(RANDOM_STRING));
	t.assert(!isMap(RANDOM_NUMBER));
});
