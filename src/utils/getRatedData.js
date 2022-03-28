export const getRatedData = (productData, rating) => {
  return productData.filter((item) => Number(item.rating) >= Number(rating));
};
