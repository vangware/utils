import type { Test } from "@vangware/test";
import { constructWeakMap } from "../src/constructWeakMap.js";

export default {
	given: "a constructWeakMap",
	must: "return new instance of WeakMap",
	received: () => constructWeakMap().constructor.name,
	wanted: () => "WeakMap",
} as Test<string>;
