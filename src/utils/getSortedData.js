import { LOW_TO_HIGH, HIGH_TO_LOW } from "./constants";
export const getSortedData = (productData, sortBy) => {
  switch (sortBy) {
    case HIGH_TO_LOW:
      return productData.sort((a, b) => b.discountedPrice - a.discountedPrice);
    case LOW_TO_HIGH:
      return productData.sort((a, b) => a.discountedPrice - b.discountedPrice);
    default:
      return productData;
  }
};
