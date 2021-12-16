import axios from "axios";
import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCSS,
  LOGOUT,
} from "../ActionTypes/LoginTypes";

export const LoginUser = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    const res = await axios.post("/user/login", user);
    localStorage.setItem("token", res.data.accesstoken);
    localStorage.setItem("isAdmin", res.data.user.role === 1);

    dispatch({
      type: LOGIN_SUCCSS,
      payload: {
        user: res.data.user,
        isAdmin: res.data.user.role === 1 ? true : false,
        token: res.data.accesstoken,
      },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
    alert("Email or password incorrect");
  }
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isAdmin");
  return {
    type: LOGOUT,
  };
};
