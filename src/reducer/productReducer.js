import {
  INITIAL_DATA,
  PRICE_CHANGE,
  CATEGORY_CHANGE,
  INITIALIZE_CATEGORY,
  SORT_BY,
  RATING_CHANGE,
  CLEAR_ALL,
  REMOVE_FROM_WISHLIST,
  ADD_TO_WISHLIST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INC_QTY,
  DEC_QTY,
} from "../utils/constants";

let initialData = [];
let categoryData = {};
let updatedWishlist = [];
let updatedCart = [];
let cartItemIndex;

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

    case REMOVE_FROM_WISHLIST:
      updatedWishlist = productState.wishlist.filter(
        (wishItem) => wishItem._id !== action.payload._id
      );
      return { ...productState, wishlist: updatedWishlist };

    case ADD_TO_WISHLIST:
      updatedWishlist = [...productState.wishlist, action.payload];
      return {
        ...productState,
        wishlist: updatedWishlist,
      };

    case ADD_TO_CART:
      cartItemIndex = productState.cart.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      updatedCart =
        cartItemIndex === -1
          ? [...productState.cart, { ...action.payload, qty: 1 }]
          : productState.cart.map((item, index) =>
              index === cartItemIndex ? { ...item, qty: item.qty + 1 } : item
            );
      return {
        ...productState,
        cart: updatedCart,
      };

    case REMOVE_FROM_CART:
      updatedCart = productState.cart.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      return {
        ...productState,
        cart: updatedCart,
      };

    case INC_QTY:
      updatedCart = productState.cart.map((cartItem) =>
        cartItem._id === action.payload._id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      );

      return {
        ...productState,
        cart: updatedCart,
      };

    case DEC_QTY:
      updatedCart = productState.cart.map((cartItem) =>
        cartItem._id === action.payload._id
          ? { ...cartItem, qty: cartItem.qty - 1 }
          : cartItem
      );
      return {
        ...productState,
        cart: updatedCart,
      };

    default:
      return productState;
  }
};
