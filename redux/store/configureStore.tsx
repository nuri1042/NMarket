import { Context, createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers/index";

// Redux-Persist 사용하여 store 유지
import { persistStore } from "redux-persist";

const configureStore = () => {
  const middlewares: Middleware[] = []; // custom middleware should use the 'Middleware' type
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer); // persistConfing 가 추가된 reducer로 store 생성
  let persistor = persistStore(store); // 새로고침해도 지속될 persist store 생성

  return { persistor, ...store };
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
