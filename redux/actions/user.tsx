import { UserState } from "../../interfaces/userData.interfaces";

export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";

export interface LoginAction {
  type: typeof LOG_IN;
  data: {
    id: number;
    nickname: string;
  };
}

export interface SignupAction {
  type: typeof SIGN_UP;
  data: {
    id: number;
    nickname: string;
  };
}

export type Actions = LoginAction | SignupAction;
