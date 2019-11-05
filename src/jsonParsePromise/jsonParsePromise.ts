import JSONParsePromiseFunction from "./JSONParsePromiseFunction";

/**
 * Promise wrapper of JSON.parse.
 *
 * @param text - Text value to parse.
 * @param reviver - Transformer function.
 * @returns Promise with parsed JSON. Can be catch if any error is thrown.
 */
export const jsonParsePromise: JSONParsePromiseFunction = (text, reviver) =>
	new Promise(resolve => resolve(JSON.parse(text, reviver)));

export default jsonParsePromise;
