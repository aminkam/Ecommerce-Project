import { ProductReducer } from "../ProductReducer";
import { combineReducers } from "redux";
import LoginReducer from "../LoginReducer";
import RegisterUser from "../RegisterReducer";

import { cartReducer } from "../AddToCartReducer";
// import { cartProductReducer } from "../CartReducer";

const CombineReducer = combineReducers({
  productsReducer: ProductReducer,
  loginReducer: LoginReducer,
  registerUser: RegisterUser,
  // cartProduct: cartProductReducer,
  addCartReducer: cartReducer,
});

export default CombineReducer;
