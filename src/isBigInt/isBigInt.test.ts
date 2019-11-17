import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isBigInt from "./isBigInt";

test("checks BigInt correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isBigInt(BigInt(1)));
	t.assert(isBigInt(BigInt("1")));
	t.assert(!isBigInt(undefined));
	t.assert(!isBigInt(EMPTY_ARRAY));
	t.assert(!isBigInt(EMPTY_OBJECT));
	t.assert(!isBigInt(RANDOM_STRING));
	t.assert(!isBigInt(RANDOM_NUMBER));
});
