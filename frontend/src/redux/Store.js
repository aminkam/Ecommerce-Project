import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CombineReducer from "./Reducer/CombinedReducer/CombineReducer";

const cartItemsInLocalStorage = localStorage.getItem("addCartReducer")
  ? JSON.parse(localStorage.getItem("addCartReducer"))
  : [];

const INITIAL_STATE = {
  addCartReducer: {
    cartItems: cartItemsInLocalStorage,
  },
};

const devtool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  CombineReducer,
  INITIAL_STATE,
  compose(applyMiddleware(thunk), devtool)
);
export default store;

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevtools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

// const reducer = combineReducers({});

// let initialState = {};
// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevtools(applyMiddleware(...middleware))
// );

// export default store;
