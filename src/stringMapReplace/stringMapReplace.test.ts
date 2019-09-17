import test from "ava";
import { randomString } from "../testUtils";
import stringMapReplace from "./stringMapReplace";

test("replaces strings correctly", t => {
	const STRING_1 = randomString();
	const STRING_2 = randomString();
	const STRING_3 = randomString();

	const stringMapReplaceOutput = stringMapReplace(`${STRING_1}${STRING_2}`, {
		[STRING_1]: STRING_3,
		[STRING_2]: STRING_3
	});
	t.is(stringMapReplaceOutput, STRING_3.repeat(2));
});
