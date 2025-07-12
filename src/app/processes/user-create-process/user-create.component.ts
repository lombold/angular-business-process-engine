import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from "@angular/core";
import { StepComponent } from "../../../lib/process-engine/process.type";
import { User } from "./user";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

type UserForm = {
  [K in keyof User]: FormControl<User[K]>;
};

@Component({
  selector: "app-user-create",
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="userForm()" (ngSubmit)="submit(userForm())">
      <div>
        <input
          type="text"
          formControlName="username"
          placeholder="Username"
          required
        />
      </div>
      <div>
        <input
          type="text"
          formControlName="firstName"
          placeholder="Firstname"
          required
        />
      </div>
      <div>
        <input
          type="text"
          formControlName="lastName"
          placeholder="Firstname"
          required
        />
      </div>
      <div>
        <input
          type="text"
          formControlName="email"
          placeholder="Firstname"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateComponent implements StepComponent<string, User> {
  public readonly input = input.required<string>();
  public readonly output = output<User>();

  protected readonly userForm = computed(
    () =>
      new FormGroup<UserForm>({
        username: new FormControl(this.input(), {
          nonNullable: true,
          validators: [Validators.required],
        }),
        firstName: new FormControl("", {
          nonNullable: true,
          validators: [Validators.required],
        }),
        lastName: new FormControl("", {
          nonNullable: true,
          validators: [Validators.required],
        }),
        email: new FormControl("", { nonNullable: true }),
      }),
  );

  protected submit(form: FormGroup<UserForm>): void {
    if (form.valid) {
      this.output.emit(this.mapFormToUser(form));
    } else {
      form.markAllAsTouched();
    }
  }

  private mapFormToUser(form: FormGroup<UserForm>): User {
    return {
      ...form.getRawValue(),
    };
  }
}
