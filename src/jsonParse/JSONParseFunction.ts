import JSONParseReviver from "./JSONParseReviver";

export type JSONParseFunction = <OutputType>(
	text: string,
	reviver?: JSONParseReviver<OutputType>
) => OutputType | undefined;

export default JSONParseFunction;
