import axios from "axios";

export const getAllProductService = () => {
  return axios.get("/api/products");
};

export const getSingleProductService = (productId) => {
  return axios.get(`/api/user/products/${productId}`);
};
