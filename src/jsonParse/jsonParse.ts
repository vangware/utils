import tryCatch from "../tryCatch/tryCatch";

/**
 * JSON.parse wrapper with integrated try catch.
 * @param text Text value to parse.
 * @param reviver Transformer function
 */
export const jsonParse = <OutputType>(
	text: string,
	reviver?: (
		this: OutputType,
		key: string,
		value: OutputType[keyof OutputType]
	) => OutputType[keyof OutputType]
) => tryCatch<OutputType>(() => JSON.parse(text, reviver));

export default jsonParse;
