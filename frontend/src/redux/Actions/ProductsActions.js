import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  SEARCH,
  UPDATE_PRODUCT,
} from "../ActionTypes/ProductsTypes";
import axios from "axios";

export const CreateProduct =
  (product_id, name, price, image, rating, category, Quantity) =>
  async (dispatch) => {
    try {
      const newProduct = {
        product_id,
        name,
        price,
        image,
        category,
        rating,
        Quantity,
      };
      const res = await axios.post("/api/products", newProduct);
      console.log(res, "add");
      dispatch({
        type: CREATE_PRODUCT,
        payload: res.data.newProduct,
      });
    } catch (error) {
      alert(" post error");
    }
  };

export const UpdateProduct =
  (id, name, price, rating, category, Quantity) => async (dispatch) => {
    try {
      const updateProduct = {
        name,
        price,
        rating,
        category,
        Quantity,
      };
      const res = await axios.put(`/api/products/${id}`, updateProduct);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: res.data.updateProduct,
      });
    } catch (error) {
      alert(" SORRY !!!  Can't Upadate a Product");
    }
  };

export const DeleteProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    alert(" SORRY !!!  Can't Delete a Product");
  }
};

export const GetProduct =
  (keyword = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get("/api/products");

      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
      // console.log("res", res);
    } catch (error) {
      alert(" SORRY !!!  Can't GET  Products");
    }
  };

export const searching = (x) => {
  return {
    type: SEARCH,
    payLoad: x,
  };
};
