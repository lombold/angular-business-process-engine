import { Process, Step, StepComponent } from "./process.type";
import { Type } from "@angular/core";

export function process<In, Out, Steps extends Step<any, any>[]>(
  ...steps: Steps
): Process<In, Out> {
  return steps as unknown as Process<In, Out>;
}

// export function process<In, Out, Steps extends Process<In, Out>>(
//   ...steps: Steps
// ): Steps {
//   return steps;
// }

export function step<In, Out>(
  component: Type<StepComponent<In, Out>>,
): Step<In, Out> {
  return {
    component,
    input: undefined,
    output: undefined,
  };
}
