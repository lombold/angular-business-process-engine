import { ChangeDetectionStrategy, Component } from "@angular/core";
import { StepComponent } from "../../../lib/process-engine/process.type";

@Component({
  selector: "app-user-create",
  imports: [],
  template: ``,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateComponent implements StepComponent<string, string> {
  start(input: string, callback: (out: string) => void): void {
    throw new Error("Method not implemented.");
  }
}
