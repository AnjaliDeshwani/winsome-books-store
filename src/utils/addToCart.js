import { ADD_TO_CART } from "./constants";
export const addToCart = (product, productDispatch) => {
  return productDispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};
