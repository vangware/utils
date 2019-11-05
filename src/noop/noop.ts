import NoopFunction from "./NoopFunction";

/**
 * No operation placeholder function.
 *
 * @param _params - Params (will be ignored).
 * @returns Nothing (is just a placeholder function).
 */
export const noop: NoopFunction = (..._params) => undefined;

export default noop;
