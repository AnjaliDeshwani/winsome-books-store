import { getOrdersService } from "../services";
import { GET_ORDERS } from "./constants";
export const getOrders = async (orderDispatch, token) => {
  try {
    const {
      data: { order },
    } = await getOrdersService(token);
    orderDispatch({
      type: GET_ORDERS,
      payload: order,
    });
  } catch (error) {
    console.error(error);
  }
};
