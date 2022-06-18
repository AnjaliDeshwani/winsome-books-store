import { useProduct } from "../context/product-context";
import {
  getCategoryData,
  getPriceRangeData,
  getSortedData,
  getRatedData,
  getSearchedData,
} from "../utils";

export const useFilterHook = () => {
  const { productState } = useProduct();

  let filteredData = [...productState.data];

  filteredData = getSearchedData(filteredData, productState.searchText);
  filteredData = getPriceRangeData(filteredData, productState.priceRange);
  filteredData = getCategoryData(filteredData, productState.selectedCategory);
  filteredData = getSortedData(filteredData, productState.sortBy);
  filteredData = getRatedData(filteredData, productState.rating);

  return { filteredData };
};
