import { toast } from "react-hot-toast";
import { REMOVE_FROM_WISHLIST } from "./constants";
import { removeItemFromWishlistService } from "../services";

export const removeFromWishlist = async (productId, productDispatch, token) => {
  try {
    const {
      data: { wishlist },
    } = await removeItemFromWishlistService({ productId, token });
    productDispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: wishlist,
    });
    toast.success("Product removed from Wishlist!");
  } catch (error) {
    console.error(error);
  }
};
