/**
 * Readonly `Record` wrapper.
 *
 * @template Value Possible values of the given Record.
 * @template Key Key type of given Record.
 */
export type ImmutableRecord<
	Value = unknown,
	Key extends string | number | symbol = string | number | symbol
> = Readonly<Record<Key, Value>>;
