/**
 * Takes an object and stringify to JSON safely using a Promise.
 *
 * @example
 * ```typescript
 * jsonStringifyPromise(circular)
 * 	.then(console.log)
 * 	.catch(console.error); // error
 * jsonStringifyPromise({})
 * 	.then(console.log)
 * 	.catch(console.error); // log
 * ```
 * @template Source Type of source object.
 * @param source Source object.
 * @returns Promise which resolves to a string or rejects with errors.
 */
export const jsonStringifyPromise = <Source>(source: Source) =>
	new Promise<string>(resolve => resolve(JSON.stringify(source)));

export default jsonStringifyPromise;
