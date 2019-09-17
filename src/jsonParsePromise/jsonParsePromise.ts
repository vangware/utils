/**
 * Promise wrapper of JSON.parse.
 * @param text Text value to parse.
 * @param reviver Transformer function
 */
export const jsonParsePromise = <OutputType>(
	text: string,
	reviver?: (
		this: OutputType,
		key: string,
		value: OutputType[keyof OutputType]
	) => OutputType[keyof OutputType]
) => new Promise<OutputType>(resolve => resolve(JSON.parse(text, reviver)));

export default jsonParsePromise;
