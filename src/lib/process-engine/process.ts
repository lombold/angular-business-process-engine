import { Process, Step, StepComponent } from "./process.type";
import { ValidChain } from "./type-helper";
import { Type } from "@angular/core";

export function process<In, Out, Steps extends Process<In, Out>>(
  ...steps: ValidChain<Steps>
): Out {
  return undefined as Out;
}

export function step<In, Out>(
  component: Type<StepComponent<In, Out>>,
): Step<In, Out> {
  return {
    component,
  };
}
