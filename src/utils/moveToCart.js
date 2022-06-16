import { addToCart, removeFromWishlist } from "./index";
export const moveToCart = (product, productDispatch, token) => {
  addToCart(product, productDispatch, token);
  removeFromWishlist(product._id, productDispatch, token);
};
