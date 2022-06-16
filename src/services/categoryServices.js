import axios from "axios";

export const getAllCategoriesService = () => {
  return axios.get("/api/categories");
};

export const getSingleCategoryService = (categoryId) => {
  return axios.get("/api/user/category/:categoryId");
};
