import { Directive, HostListener, inject } from "@angular/core";
import { ProcessService } from "../process.service";

@Directive({
  selector: "[appPreviousStep]",
})
export class PreviousStepDirective {
  private readonly processService = inject(ProcessService);

  @HostListener("click")
  onClick(): void {
    this.processService.previous();
  }
}
