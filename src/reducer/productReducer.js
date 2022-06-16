import * as constants from "../utils/constants";

let initialData = [];
let categoryData = {};

export const productReducer = (productState, action) => {
  switch (action.type) {
    case constants.INITIAL_DATA:
      initialData = action.payload;
      return { ...productState, data: action.payload };

    case constants.INITIALIZE_CATEGORY:
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

    case constants.PRICE_CHANGE:
      return {
        ...productState,
        priceRange: action.payload,
      };

    case constants.CATEGORY_CHANGE:
      const newSelectedCategory = {
        ...productState.selectedCategory,
        ...action.payload,
      };
      return {
        ...productState,
        selectedCategory: newSelectedCategory,
      };

    case constants.SORT_BY:
      return {
        ...productState,
        sortBy: action.payload,
      };

    case constants.RATING_CHANGE:
      return {
        ...productState,
        rating: action.payload,
      };

    case constants.CLEAR_ALL:
      return {
        ...productState,
        data: [...initialData],
        priceRange: 1000,
        selectedCategory: categoryData,
        sortBy: "",
        rating: "",
      };

    case constants.REMOVE_FROM_WISHLIST:
      return { ...productState, wishlist: action.payload };

    case constants.ADD_TO_WISHLIST:
      return {
        ...productState,
        wishlist: action.payload,
      };

    case constants.ADD_TO_CART:
      return {
        ...productState,
        cart: [...action.payload],
      };

    case constants.REMOVE_FROM_CART:
      return {
        ...productState,
        cart: [...action.payload],
      };

    case constants.INC_QTY:
      return {
        ...productState,
        cart: [...action.payload],
      };

    case constants.DEC_QTY:
      return {
        ...productState,
        cart: [...action.payload],
      };

    default:
      return productState;
  }
};
