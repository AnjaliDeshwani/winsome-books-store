export const getPriceRangeData = (productData, priceRange) => {
  return productData.filter(
    (item) => Number(item.discountedPrice) <= Number(priceRange)
  );
};
