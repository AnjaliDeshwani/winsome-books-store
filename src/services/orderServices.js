import axios from "axios";

const getOrdersService = (token) => {
  return axios.get("/api/user/order", { headers: { authorization: token } });
};
const addOrdersService = (order, token) => {
  const reponse = axios.post(
    "/api/user/order",
    { order },
    { headers: { authorization: token } }
  );
  return reponse;
};

export { getOrdersService, addOrdersService };
