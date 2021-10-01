/**
 * Readonly `Record` wrapper.
 *
 * @template Value Possible values of the given Record.
 * @template Key Key type of given Record.
 */
export type ImmutableRecord<
	Value = unknown,
	Key extends number | string | symbol = number | string | symbol,
> = Readonly<Record<Key, Value>>;
