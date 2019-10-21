import test from "ava";
import { randomLengthStringArray } from "../tests";
import noop from "./noop";

test("returns undefined and takes any amount of parameters", t => {
	const noopOutput = noop(...randomLengthStringArray());
	t.is(noopOutput, undefined);
});
