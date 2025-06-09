import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from "@angular/core";
import { StepComponent } from "../../../lib/process-engine/process.type";

@Component({
  selector: "app-user-create",
  imports: [],
  template: `User create step`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateComponent implements StepComponent<string, string> {
  public readonly input = input.required<string>();
  public readonly output = output<string>();
}
