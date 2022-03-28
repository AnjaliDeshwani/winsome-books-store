import {
  INITIAL_DATA,
  PRICE_CHANGE,
  CATEGORY_CHANGE,
  INITIALIZE_CATEGORY,
  SORT_BY,
  RATING_CHANGE,
  CLEAR_ALL,
} from "../utils/constants";
let initialData = [];
let categoryData = {};
export const productReducer = (productState, action) => {
  switch (action.type) {
    case INITIAL_DATA:
      initialData = action.payload;
      return { ...productState, data: action.payload };

    case INITIALIZE_CATEGORY:
      categoryData = action.payload.reduce(
        (catObj, catItem) => ({
          ...catObj,
          [catItem.categoryName]: false,
        }),
        {}
      );
      return {
        ...productState,
        selectedCategory: {
          ...categoryData,
        },
      };

    case PRICE_CHANGE:
      return {
        ...productState,
        priceRange: action.payload,
      };

    case CATEGORY_CHANGE:
      const newSelectedCategory = {
        ...productState.selectedCategory,
        ...action.payload,
      };
      return {
        ...productState,
        selectedCategory: newSelectedCategory,
      };

    case SORT_BY:
      return {
        ...productState,
        sortBy: action.payload,
      };

    case RATING_CHANGE:
      return {
        ...productState,
        rating: action.payload,
      };

    case CLEAR_ALL:
      return {
        ...productState,
        data: [...initialData],
        priceRange: 1000,
        selectedCategory: categoryData,
        sortBy: "",
        rating: "",
      };

    default:
      return productState;
  }
};
