import { objectFreeze } from "../objectFreeze";
import { assert } from "./assert";

const object = { key: "value" };

export const freezeAssertions = assert([
	{
		given: "an object",
		must: "return a new copy",
		received: object !== objectFreeze(object),
		wanted: true
	},
	{
		given: "an object",
		must: "freeze it",
		/**
		 * TypeScript and the ESLint are configured to avoid doing stupid stuff
		 * like the following, so I had to add lots of eslint-disable-next-line
		 * stuff in order to actually test it.
		 */
		received: (() => {
			const frozen = objectFreeze(object);
			// eslint-disable-next-line functional/no-let
			let writeOnly = false;
			// eslint-disable-next-line functional/no-try-statement
			try {
				// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data, @typescript-eslint/no-unnecessary-type-assertion
				(frozen.key as string) = "new value";
			} catch {
				// eslint-disable-next-line functional/no-expression-statement
				writeOnly = true;
			}

			return writeOnly;
		})(),
		wanted: true
	}
]);
