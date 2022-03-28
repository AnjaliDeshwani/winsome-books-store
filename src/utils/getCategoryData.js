export const getCategoryData = (filteredData, newSelectedCategory) => {
  if (
    Object.values(newSelectedCategory).every((item) => item === false) ||
    Object.values(newSelectedCategory).every((item) => item === true)
  ) {
    return filteredData;
  } else {
    return Object.keys(newSelectedCategory).reduce((acc, curr) => {
      if (newSelectedCategory[curr]) {
        return [
          ...acc,
          ...filteredData.filter((item) => item.categoryName === curr),
        ];
      } else {
        return [...acc];
      }
    }, []);
  }
};
