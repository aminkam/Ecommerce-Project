import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes/AddToCartType";
const CART_INITIAL_STATE = {
  cartItems: [],
};
export const cartReducer = (state = CART_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const item = payload;
      const existItem = state.cartItems.find(
        (x) => x.product_id === item.product_id
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product_id ? item : x
          ),
        };
      } else
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product_id !== payload),
      };

    default:
      return state;
  }
};
