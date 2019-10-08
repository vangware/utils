import WhenFalsy from "./WhenFalsy";

export type WhenFalsyValue<ValueType> = Extract<ValueType, WhenFalsy>;

export default WhenFalsyValue;
