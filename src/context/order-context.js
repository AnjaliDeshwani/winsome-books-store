import { createContext, useContext, useReducer, useEffect } from "react";
import { orderReducer } from "../reducer/orderReducer";
import { useAuth } from "./auth-context";
import { getOrders } from "../utils";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const { token } = useAuth();
  const [orderState, orderDispatch] = useReducer(orderReducer, { orders: [] });
  useEffect(() => {
    if (token) {
      getOrders(orderDispatch, token);
    }
  }, [token]);
  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { OrderProvider, useOrder };
