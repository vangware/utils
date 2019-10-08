import WhenFalsy from "./WhenFalsy";

export type WhenTruthyValue<ValueType> = Exclude<ValueType, WhenFalsy>;

export default WhenTruthyValue;
