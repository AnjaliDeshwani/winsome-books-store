import { useProduct } from "../context/product-context";
import {
  getCategoryData,
  getPriceRangeData,
  getSortedData,
  getRatedData,
} from "../utils";

export const useFilterHook = () => {
  const { productState } = useProduct();

  let filteredData = [...productState.data];

  filteredData = getPriceRangeData(filteredData, productState.priceRange);
  filteredData = getCategoryData(filteredData, productState.selectedCategory);
  filteredData = getSortedData(filteredData, productState.sortBy);
  filteredData = getRatedData(filteredData, productState.rating);

  return { filteredData };
};
