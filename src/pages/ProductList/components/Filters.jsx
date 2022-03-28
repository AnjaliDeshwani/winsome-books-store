import "./Filters.css";
import { PriceSlider, Category, SortBy, Ratings } from "./index";
import { useProduct } from "../../../context/product-context";
import { CLEAR_ALL } from "../../../utils/constants";

export const Filters = () => {
  const { productState, productDispatch } = useProduct();
  return (
    <div className="filter-section">
      <div className="filter-block">
        <div className="filter-text">
          <div className="font-bold">Filters</div>
          <div>
            <span
              className="clear-all-btn font-semibold"
              onClick={() => productDispatch({ type: CLEAR_ALL })}
            >
              Clear all
            </span>
          </div>
        </div>
        <PriceSlider />
        <Category />
        <Ratings />
        <SortBy />
      </div>
    </div>
  );
};
