import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ProcessComponent } from "../../../lib/process-engine/process/process.component";

@Component({
  selector: "app-create-user-page",
  imports: [ProcessComponent],
  template: ` <app-process />`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserPageComponent {}
