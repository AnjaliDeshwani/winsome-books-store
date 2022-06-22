import { addOrdersService } from "../services";
import { ADD_ORDERS } from "./constants";
export const addOrders = async (orderData, token, orderDispatch) => {
  try {
    const response = await addOrdersService(orderData, token);
    orderDispatch({
      type: ADD_ORDERS,
      payload: response.data.order,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
