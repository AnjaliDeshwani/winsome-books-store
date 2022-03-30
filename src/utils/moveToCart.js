import { addToCart, removeFromWishlist } from "./index";
export const moveToCart = (product, productDispatch) => {
  addToCart(product, productDispatch);
  removeFromWishlist(product, productDispatch);
};
