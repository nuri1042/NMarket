import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import product from "./product";
import user from "./user";

// Redux-Persist 추가
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localstorgae 에 저장

// 새로운 persist 선안
const persistConfig = {
  key: "root", // reducer의 어느 지점에서부터 데이터를 저장할 것인지
  storage: storage, // localStorage 에 저장
};

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

export default persistReducer(persistConfig, rootReducer); // persistConfig 가 추가된 reducer 반환
