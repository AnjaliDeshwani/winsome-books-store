import { REMOVE_FROM_CART } from "./constants";
export const removeFromCart = (product, productDispatch) => {
  return productDispatch({
    type: REMOVE_FROM_CART,
    payload: product,
  });
};
