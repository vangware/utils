/**
 * Takes a JSON string and parses it safely using a Promise.
 *
 * @example
 * ```typescript
 * jsonParsePromise("invalid")
 * 	.then(console.log)
 * 	.catch(console.error); // error
 * jsonParsePromise("{}")
 * 	.then(console.log)
 * 	.catch(console.error); // log
 * ```
 * @template Output Expected type if the parse is successful.
 * @param text String value to parse.
 * @returns Promise which resolves to an object of type `Output`.
 */
export const jsonParsePromise = <Output = unknown>(text: string) =>
	new Promise<Output>(resolve => resolve(JSON.parse(text)));
