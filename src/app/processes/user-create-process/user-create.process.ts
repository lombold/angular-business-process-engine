import { process, step } from "../../../lib/process-engine/process";
import { UserCreateComponent } from "./user-create.component";

export const createUserProcess = process(
  step(UserCreateComponent),
  step(UserCreateComponent),
  step(UserCreateComponent),
);
