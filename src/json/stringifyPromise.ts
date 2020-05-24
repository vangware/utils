/**
 * Takes an object and stringify to JSON safely using a Promise.
 *
 * @example
 * ```typescript
 * stringifyPromise(circular).then(console.log).catch(console.error); // error
 * stringifyPromise({}).then(console.log).catch(console.error); // log
 * ```
 * @template Source Type of source object.
 * @param source Source object.
 * @returns Promise which resolves to a string or rejects with errors.
 */
export const stringifyPromise = <Source>(source: Source) =>
	new Promise<string>(resolve => resolve(JSON.stringify(source)));

export default stringifyPromise;
