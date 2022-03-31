import { addToWishlist, removeFromCart } from "./index";
export const moveToWishlist = (product, productDispatch) => {
  addToWishlist(product, productDispatch);
  removeFromCart(product, productDispatch);
};
