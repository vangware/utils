/**
 * ReadOnly that applies only to objects
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type ReadOnlyObject<Source> = Source extends object
	? Readonly<Source>
	: Source;
