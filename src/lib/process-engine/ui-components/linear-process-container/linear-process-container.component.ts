import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Process } from "../../process.type";
import { ProcessComponent } from "../../process.component";
import { NextStepDirective } from "../../directives/next-step.directive";
import { PreviousStepDirective } from "../../directives/previous-step.directive";
import { ProcessService } from "../../process.service";

@Component({
  selector: "app-linear-process-container",
  imports: [ProcessComponent, NextStepDirective, PreviousStepDirective],
  template: `
    <div class="fit-content flex flex-col gap-1">
      <app-process [process]="process()" />
      <div class="flex flex-row justify-between">
        <button appPreviousStep type="button">Previous</button>
        <button appNextStep type="button">Next</button>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProcessService],
})
export class LinearProcessContainerComponent {
  public readonly process = input.required<Process<unknown, unknown>>();
}
