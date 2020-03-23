import type JSONParseReviver from "./JSONParseReviver";

export type JSONParsePromiseFunction = <OutputType>(
	text: string,
	reviver?: JSONParseReviver<OutputType>
) => Promise<OutputType>;

export default JSONParsePromiseFunction;
