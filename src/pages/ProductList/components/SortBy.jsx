import { useProduct } from "../../../context/product-context";
import { SORT_BY, HIGH_TO_LOW, LOW_TO_HIGH } from "../../../utils/constants";

export const SortBy = () => {
  const { productState, productDispatch } = useProduct();
  return (
    <div className="filter-sort filter-type">
      <div className="font-bold">Sort By</div>
      <ul className="list stacked-list">
        <li>
          <label>
            <input
              type="radio"
              name="sort"
              checked={productState.sortBy === HIGH_TO_LOW}
              onChange={() =>
                productDispatch({
                  type: SORT_BY,
                  payload: HIGH_TO_LOW,
                })
              }
            />
            Price- High to Low
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="sort"
              checked={productState.sortBy === LOW_TO_HIGH}
              onChange={() =>
                productDispatch({
                  type: SORT_BY,
                  payload: LOW_TO_HIGH,
                })
              }
            />
            Price- Low to High
          </label>
        </li>
      </ul>
    </div>
  );
};
