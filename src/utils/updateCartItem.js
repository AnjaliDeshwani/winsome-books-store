import { updateCartItemService } from "../services";
import { INC_QTY, DEC_QTY } from "./constants";
export const updateCartItem = async (
  productId,
  productDispatch,
  actionType,
  token
) => {
  try {
    const {
      data: { cart },
    } = await updateCartItemService({ productId, actionType, token });
    productDispatch({
      type: actionType === "INC_QTY" ? INC_QTY : DEC_QTY,
      payload: cart,
    });
  } catch (error) {
    console.error(error);
  }
};
