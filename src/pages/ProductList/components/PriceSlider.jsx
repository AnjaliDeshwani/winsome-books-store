import { useProduct } from "../../../context/product-context";
import { PRICE_CHANGE } from "../../../utils/constants";

export const PriceSlider = () => {
  const { productState, productDispatch } = useProduct();
  return (
    <div className="filter-price filter-type">
      <div className="slider-container">
        <input
          className="slider"
          id="sliderRange"
          type="range"
          min="1"
          max="1000"
          value={productState.priceRange}
          onChange={(e) =>
            productDispatch({
              type: PRICE_CHANGE,
              payload: e.target.value,
            })
          }
        />
        <div className="slider-value">{productState.priceRange}</div>
      </div>
    </div>
  );
};
