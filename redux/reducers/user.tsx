import { UserState } from "../../interfaces/userData.interfaces";
import { Actions, LOG_IN, SIGN_UP } from "../actions/user";

const dummyUser = {
  id: 1,
  nickname: "kimnuri",
};

export const initialState: UserState = {
  isLoggedIn: false,
  me: [],
  loginData: {},
  signUpData: {},
};

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        me: dummyUser,
        loginData: action.data,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
