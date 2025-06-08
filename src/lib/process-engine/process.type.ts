import { Type } from "@angular/core";

export type Process<In, Out> = [
  Step<In, unknown>,
  ...Step<unknown, unknown>[],
  Step<unknown, Out>,
];

export type Step<In, Out> = {
  component: Type<StepComponent<In, Out>>;
};

export interface StepComponent<In, Out> {
  start(input: In, callback: (out: Out) => void): void;
}
