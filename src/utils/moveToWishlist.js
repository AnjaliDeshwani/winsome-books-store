import { addToWishlist, removeFromCart } from "./index";
export const moveToWishlist = (product, productDispatch, token) => {
  addToWishlist(product, productDispatch, token);
  removeFromCart(product._id, productDispatch, token);
};
