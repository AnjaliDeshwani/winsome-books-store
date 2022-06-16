import { ADD_TO_CART } from "./constants";
import { addItemToCartService } from "../services";

export const addToCart = async (product, productDispatch, token) => {
  try {
    const {
      data: { cart },
    } = await addItemToCartService({ product, token });
    productDispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  } catch (error) {
    console.error(error);
  }
};
