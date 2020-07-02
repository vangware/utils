import { Falsy } from "./Falsy";

/**
 * Generic type to check if value is not Falsy (evaluates to `true` in JS).
 */
export type Truthy<Actual> = Actual extends Falsy ? never : Actual;

export default Truthy;
