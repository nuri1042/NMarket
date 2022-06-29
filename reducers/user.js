const dummyUser = {
  id: 1,
  nickname: "kimnuri",
};

export const initialState = {
  isLoggedIn: false,
  me: null,
  loginData: {},
  signUpData: {},
};

export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";

export const loginAction = (data) => ({
  type: LOG_IN,
  data,
});

export const signupAction = (data) => ({
  type: SIGN_UP,
  data,
});

const reducer = (state = initialState, action) => {
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
