import { REMOVE_FROM_CART } from "./constants";
import { removeItemFromCartService } from "../services";
export const removeFromCart = async (productId, productDispatch, token) => {
  try {
    const {
      data: { cart },
    } = await removeItemFromCartService({ productId, token });
    productDispatch({
      type: REMOVE_FROM_CART,
      payload: cart,
    });
  } catch (error) {
    console.error(error);
  }
};
