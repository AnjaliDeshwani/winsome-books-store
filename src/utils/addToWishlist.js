import { ADD_TO_WISHLIST } from "./constants";
export const addToWishlist = (product, productDispatch) => {
  return productDispatch({
    type: ADD_TO_WISHLIST,
    payload: product,
  });
};
