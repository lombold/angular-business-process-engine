import { ChangeDetectionStrategy, Component } from "@angular/core";
import { createUserProcess } from "../../processes/user-create-process/user-create.process";
import { ProcessComponent } from "../../../lib/process-engine/process.component";

@Component({
  selector: "app-create-user-page",
  imports: [ProcessComponent],
  template: ` <app-process [process]="createUserProcess" />`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserPageComponent {
  protected readonly createUserProcess = createUserProcess;
}
