import JSONParseReviver from "../jsonParse/JSONParseReviver";

export type JSONParsePromiseFunction = <OutputType>(
	text: string,
	reviver?: JSONParseReviver<OutputType>
) => Promise<OutputType>;

export default JSONParsePromiseFunction;
