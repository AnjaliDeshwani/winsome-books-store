export const getDiscountPercent = (price, discountedPrice) => {
  return Math.round((1 - discountedPrice / price) * 100);
};
