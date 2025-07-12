import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from "@angular/core";
import { StepComponent } from "../../../lib/process-engine/process.type";

@Component({
  selector: "app-select-username",
  imports: [],
  template: `<input
    #usernameInput
    type="text"
    placeholder="Enter username"
    (change)="output.emit(usernameInput.value)"
  />`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectUsernameComponent
  implements StepComponent<undefined, string>
{
  public readonly input = input.required<undefined>();
  public readonly output = output<string>();
}
