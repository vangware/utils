import ava from "ava";

type AssertionOptions<OutputType> = {
	readonly given: string;
	readonly must: string;
	readonly received: OutputType | Promise<OutputType>;
	readonly wanted: OutputType | Promise<OutputType>;
};

type Assertion = <OutputType>(
	assertOptions: readonly AssertionOptions<OutputType>[]
	// eslint-disable-next-line functional/no-return-void
) => void;

export const assert: Assertion = assertOptions =>
	assertOptions.map(({ given, must, received, wanted }) =>
		ava(`Given ${given}, must ${must}.`, async executionContext =>
			executionContext.deepEqual(
				wanted instanceof Promise ? await wanted : wanted,
				received instanceof Promise ? await received : received
			)
		)
	);
