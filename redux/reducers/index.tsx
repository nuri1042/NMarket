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

// root reducer 생성
// next-redux-wrapper의 HYDRATE 액션 정의
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
export type RootState = ReturnType<typeof rootReducer>; // rootReducer 를 미리 정의하고 ReturnType을 추출해서 State 타입을 얻음 ( 추후에 이 타 입을 컨테이너 컴포넌트에서 사용 )
