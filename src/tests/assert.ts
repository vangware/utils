import ava from "ava";

export type AssertionOptions<OutputType> = {
	readonly given: string;
	readonly must: string;
	readonly received: OutputType | Promise<OutputType>;
	readonly wanted: OutputType | Promise<OutputType>;
};

export type Assertion = <OutputType>(
	assertOptions: readonly AssertionOptions<OutputType>[]
	// eslint-disable-next-line functional/no-return-void
) => void;

export const assert: Assertion = assertOptions =>
	assertOptions.map(({ given, must, received, wanted }) =>
		ava(`Given ${given}, must ${must}.`, async executionContext =>
			executionContext.deepEqual(
				received instanceof Promise ? await received : received,
				wanted instanceof Promise ? await wanted : wanted
			)
		)
	);
