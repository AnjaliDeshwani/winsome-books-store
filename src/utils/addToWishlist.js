import { ADD_TO_WISHLIST } from "./constants";
import { addItemToWishlistService } from "../services";

export const addToWishlist = async (product, productDispatch, token) => {
  try {
    const {
      data: { wishlist },
    } = await addItemToWishlistService({ product, token });
    productDispatch({
      type: ADD_TO_WISHLIST,
      payload: wishlist,
    });
  } catch (error) {
    console.error(error);
  }
};
