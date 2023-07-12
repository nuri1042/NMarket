export interface UserData {
  id: number;
  nickname: string;
}
export interface UserState {
  isLoggedIn: boolean;
  me: UserData[];
  loginData: {};
  signUpData: {};
}
