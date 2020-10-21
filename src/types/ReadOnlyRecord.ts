/**
 * Readonly Record wrapper.
 */
export type ReadOnlyRecord<Key extends string | number, Value> = Readonly<
	Record<Key, Value>
>;
