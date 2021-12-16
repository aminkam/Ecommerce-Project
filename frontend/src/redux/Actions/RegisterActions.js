import axios from "axios";
import {
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCSS,
} from "../ActionTypes/RegisterTypes";

export const RegisterUser = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });
  try {
    const res = await axios.post("/user/register", newUser);
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: REGISTER_SUCCSS,
      payload: res.data,
    });
    alert("Acoount Created");
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};
