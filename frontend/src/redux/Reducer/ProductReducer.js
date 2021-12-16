import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  SEARCH,
  UPDATE_PRODUCT,
} from "../ActionTypes/ProductsTypes";

const initialeState = {
  products: [],
  loading: true,
  search: "",
};

export const ProductReducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        loading: false,
        products: [...state.products, payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: false,
        products: state.products.map((el) =>
          el._id === payload ? { ...el, ...payload } : el
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: false,
        products: state.products.filter((el) => el._id !== payload._id),
      };
    case GET_PRODUCT:
      return { ...state, loading: false, products: payload };
    case SEARCH:
      return {
        ...state,
        search: payload,
      };

    default:
      return state;
  }
};
