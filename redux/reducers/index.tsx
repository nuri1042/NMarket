import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import product from "./product";
import user from "./user";

// Redux-Persist 추가
import { persistReducer, PURGE } from "redux-persist";
import { WebStorage } from "redux-persist/lib/types";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

function createPersistStorage(): WebStorage {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem() {
      return Promise.resolve();
    },
    removeItem() {
      return Promise.resolve();
    },
  };
}

const defStorage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStorage();

// 새로운 persist 선언
const persistConfig = {
  key: "root", // reducer의 어느 지점에서부터 데이터를 저장할 것인지
  storage: defStorage, // localStorage 에 저장
  whitelist: ["product"],
};

// root reducer 생성
// next-redux-wrapper의 HYDRATE 액션 정의
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      case PURGE:
        console.log("PURGING", action);
        return {}; // return the initial state of this reducer to reset
      default:
        return state;
    }
  },
  user, // user는 사용되지 않음
  product,
});

export default persistReducer(persistConfig, rootReducer); // persistConfig 가 추가된 reducer 반환
export type RootState = ReturnType<typeof rootReducer>; // rootReducer 를 미리 정의하고 ReturnType을 추출해서 State 타입을 얻음 ( 추후에 이 타 입을 컨테이너 컴포넌트에서 사용 )
