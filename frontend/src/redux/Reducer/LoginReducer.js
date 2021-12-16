import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCSS,
  LOGOUT,
} from "../ActionTypes/LoginTypes";

const initialState = {
  users: null,
  errors: null,
  loading: false,
  token: null,
  isAdmin: null,
};

const LoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCSS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        isAdmin: payload.isAdmin,
        users: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        isAdmin: false,
        token: null,
        users: null,
      };

    default:
      return state;
  }
};

export default LoginReducer;
