import { toast } from "react-hot-toast";
import { ADD_TO_CART } from "./constants";
import { addItemToCartService } from "../services";

export const addToCart = async (product, productDispatch, token) => {
  if (token) {
    try {
      const {
        data: { cart },
      } = await addItemToCartService({ product, token });

      productDispatch({
        type: ADD_TO_CART,
        payload: cart,
      });
      toast.success("Product added to Cart!");
    } catch (error) {
      console.error(error);
    }
  } else {
    toast.error("Login to Continue");
  }
};
