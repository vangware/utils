import test from "ava";
import { randomString } from "../tests";
import stringMapReplace from "./stringMapReplace";
import StringMapReplaceMap from "./StringMapReplaceMap";

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

test("returns the same string if the replace map is empty", t => {
	const STRING = randomString();

	const stringMapReplaceOutput = stringMapReplace(STRING, {});
	t.is(stringMapReplaceOutput, STRING);
});

test("returns the same string if the replace map is invalid", t => {
	const STRING = randomString();

	const stringMapReplaceOutput = stringMapReplace(
		STRING,
		(undefined as unknown) as StringMapReplaceMap
	);
	t.is(stringMapReplaceOutput, STRING);
});
