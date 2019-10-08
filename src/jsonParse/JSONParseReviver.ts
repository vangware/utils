export type JSONParseReviver<OutputType> = (
	this: OutputType,
	key: string,
	value: OutputType[keyof OutputType]
) => OutputType[keyof OutputType];

export default JSONParseReviver;
