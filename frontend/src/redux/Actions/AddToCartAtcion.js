import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes/AddToCartType";

export const AddToCart = (id, qty) => async (dispatch, getState) => {
  const res = await axios.get(`/api/products/${id}`);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product_id: res.data.product_id,
      name: res.data.name,
      price: res.data.price,
      image: res.data.image,
      rating: res.data.rating,
      category: res.data.category,
      Quantity: res.data.Quantity,
      qty,
    },
  });
  localStorage.setItem(
    "addCartReducer",
    JSON.stringify(getState().addCartReducer.cartItems)
  );
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem(
    "addCartReducer",
    JSON.stringify(getState().addCartReducer.cartItems)
  );
};
