import { REMOVE_FROM_WISHLIST } from "./constants";

export const removeFromWishlist = (product, productDispatch) => {
  productDispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: product,
  });
};
