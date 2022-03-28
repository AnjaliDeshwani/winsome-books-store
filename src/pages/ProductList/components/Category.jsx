import { useProduct } from "../../../context/product-context";
import { CATEGORY_CHANGE } from "../../../utils/constants";

export const Category = () => {
  const { productState, productDispatch } = useProduct();

  return (
    <div className="filter-category filter-type">
      <div className="font-bold">Categories</div>
      <ul className="list stacked-list">
        {Object.entries(productState.selectedCategory).map((item) => {
          const [categoryName, isCategory] = item;
          return (
            <li key={categoryName}>
              <label>
                <input
                  type="checkbox"
                  name={categoryName}
                  value={categoryName}
                  checked={isCategory}
                  onChange={(e) =>
                    productDispatch({
                      type: CATEGORY_CHANGE,
                      payload: { [categoryName]: e.target.checked },
                    })
                  }
                />
                {`${categoryName.charAt(0).toUpperCase()}${categoryName.slice(
                  1
                )}`}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
