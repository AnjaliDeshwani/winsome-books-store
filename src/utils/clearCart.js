import { removeFromCart } from "./removeFromCart";
export const clearCart = (cart, productDispatch, token) => {
  cart.map((product) =>
    removeFromCart(product.productId, productDispatch, token, true)
  );
};
