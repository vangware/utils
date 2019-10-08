import JSONParsePromiseFunction from "./JSONParsePromiseFunction";

/**
 * Promise wrapper of JSON.parse.
 * @param text Text value to parse.
 * @param reviver Transformer function
 */
export const jsonParsePromise: JSONParsePromiseFunction = (text, reviver?) =>
	new Promise(resolve => resolve(JSON.parse(text, reviver)));

export default jsonParsePromise;
