/**
 * No operation placeholder function.
 * @param _params Params (will be ignored).
 */
// tslint:disable-next-line: no-any
export const noop = <ParamsType, OutputType = any>(..._params: ParamsType[]) =>
	(undefined as unknown) as OutputType;

export default noop;
