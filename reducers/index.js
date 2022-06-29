import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import product from "./product";
import user from "./user";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  product,
});
export default rootReducer;
