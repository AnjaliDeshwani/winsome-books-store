import { GET_ORDERS, ADD_ORDERS } from "../utils/constants";
export const orderReducer = (orderState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return { ...orderState, orders: action.payload };

    case ADD_ORDERS: {
      return { ...orderState, orders: action.payload };
    }
    default:
      return orderState.orders;
  }
};
