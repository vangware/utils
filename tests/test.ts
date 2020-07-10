import { test as uvuTest } from "uvu";
import { equal } from "uvu/assert";

type TestOptions<OutputType> = {
	readonly given: string;
	readonly must: string;
	readonly received: OutputType | Promise<OutputType>;
	readonly wanted: OutputType | Promise<OutputType>;
};

type Test = <OutputType>(
	tests: readonly TestOptions<OutputType>[]
	// eslint-disable-next-line functional/no-return-void
) => void;

export const test: Test = tests => {
	// eslint-disable-next-line functional/no-expression-statement
	tests.forEach(({ given, must, received, wanted }) =>
		// eslint-disable-next-line functional/functional-parameters
		uvuTest(`Given ${given}, must ${must}.`, async () =>
			equal(
				received instanceof Promise ? await received : received,
				wanted instanceof Promise ? await wanted : wanted
			)
		)
	);

	return uvuTest.run();
};

export default test;
