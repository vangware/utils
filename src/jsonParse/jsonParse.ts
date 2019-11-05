import tryCatch from "../tryCatch/tryCatch";
import JSONParseFunction from "./JSONParseFunction";

/**
 * JSON.parse wrapper with integrated try catch.
 *
 * @param text - Text value to parse.
 * @param reviver - Transformer function.
 * @returns Parsed JSON or undefined.
 */
export const jsonParse: JSONParseFunction = (text, reviver) =>
	tryCatch(() => JSON.parse(text, reviver));

export default jsonParse;
