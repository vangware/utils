/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { STRING_1, STRING_2 } from "../testConstants";
import stringMapReplace from "./stringMapReplace";
import StringMapReplaceMap from "./StringMapReplaceMap";

test("replaces strings correctly", assert => {
	const stringMapReplaceOutput = stringMapReplace(`${STRING_1}${STRING_2}`, {
		[STRING_2]: STRING_1
	});
	assert.is(stringMapReplaceOutput, `${STRING_1}${STRING_1}`);
});

test("returns the same string if the replace map is empty", assert => {
	const stringMapReplaceOutput = stringMapReplace(STRING_1, {});
	assert.is(stringMapReplaceOutput, STRING_1);
});

test("returns the same string if the replace map is invalid", assert => {
	const stringMapReplaceOutput = stringMapReplace(
		STRING_1,
		(undefined as unknown) as StringMapReplaceMap
	);
	assert.is(stringMapReplaceOutput, STRING_1);
});
