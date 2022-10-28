import type { Test } from "@vangware/test";
import { bind } from "../src/bind.js";
import { construct } from "../src/construct.js";

const instance = construct(
	// eslint-disable-next-line functional/no-class, @typescript-eslint/no-extraneous-class
	class {
		public readonly works: boolean = true;

		// eslint-disable-next-line functional/no-this-expression
		public readonly test = () => this.works;
	},
)();

export default {
	given: "a binded function",
	must: "return scoped value",
	received: bind(instance)(instance.test),
	wanted: () => true,
} as Test<boolean>;
