import { process, step, summary } from "../../../lib/process-engine/process";
import { UserCreateComponent } from "./user-create.component";
import { SelectUsernameComponent } from "./select-username.component";

export const createUserProcess = process(
  step(SelectUsernameComponent),
  step(UserCreateComponent),
  summary(),
);
