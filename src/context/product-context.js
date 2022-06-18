import { createContext, useContext, useReducer, useEffect } from "react";
import { productReducer } from "../reducer/productReducer";
import { INITIAL_DATA, INITIALIZE_CATEGORY } from "../utils/constants";
import { getAllProductService, getAllCategoriesService } from "../services";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    data: [],
    priceRange: 1000,
    selectedCategory: [],
    sortBy: "",
    rating: "",
    wishlist: [],
    cart: [],
    searchText: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllProductService();
        productDispatch({
          type: INITIAL_DATA,
          payload: data.products,
        });
      } catch (error) {
        console.error("Error in fetching initial data", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllCategoriesService();
        productDispatch({
          type: INITIALIZE_CATEGORY,
          payload: data.categories,
        });
      } catch (error) {
        console.error("Error in fetching categories", error);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
