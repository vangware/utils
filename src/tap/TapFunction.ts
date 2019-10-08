import TapObserver from "./TapObserver";
import TapWrapper from "./TapWrapper";

export type TapFunction = <ValueType>(
	observer: TapObserver<ValueType>
) => TapWrapper<ValueType>;

export default TapFunction;
