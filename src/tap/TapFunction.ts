import type TapObserver from "./TapObserver";
import type TapWrapper from "./TapWrapper";

export type TapFunction = <ValueType>(
	observer: TapObserver<ValueType>
) => TapWrapper<ValueType>;

export default TapFunction;
