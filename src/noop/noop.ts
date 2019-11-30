import NoopFunction from "./NoopFunction";

/**
 * No operation placeholder function.
 *
 * @param value - Value will be returned without changing it.
 * @returns The given value.
 */
export const noop: NoopFunction = value => value;

export default noop;
