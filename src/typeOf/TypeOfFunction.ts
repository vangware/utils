import TypeOfObject from "./TypeOfObject";

export type TypeOfFunction = <ValueType>(value: ValueType) => TypeOfObject;

export default TypeOfFunction;
