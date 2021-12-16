import {
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCSS,
} from "../ActionTypes/RegisterTypes";

const initialState = {
  users: null,
  errors: null,
  loading: false,
  token: null,
};

const RegisterUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCSS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    default:
      return state;
  }
};

export default RegisterUser;
