import { toast } from "react-hot-toast";
import { ADD_TO_WISHLIST } from "./constants";
import { addItemToWishlistService } from "../services";

export const addToWishlist = async (product, productDispatch, token) => {
  if (token) {
    try {
      const {
        data: { wishlist },
      } = await addItemToWishlistService({ product, token });
      productDispatch({
        type: ADD_TO_WISHLIST,
        payload: wishlist,
      });
      toast.success("Product added to Wishlist!");
    } catch (error) {
      console.error(error);
    }
  } else {
    toast.error("Login to Continue");
  }
};
