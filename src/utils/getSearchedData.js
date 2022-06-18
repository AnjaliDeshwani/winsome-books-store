export const getSearchedData = (productData, searchText) => {
  if (searchText.trim() === "") return productData;
  return productData.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase().trim())
  );
};
