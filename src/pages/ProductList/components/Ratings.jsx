import { useProduct } from "../../../context/product-context";
import { RATING_CHANGE } from "../../../utils/constants";

export const Ratings = () => {
  const { productState, productDispatch } = useProduct();
  const ratings = [1, 2, 3, 4];
  return (
    <div className="filter-ratings filter-type">
      <div className="font-bold">Ratings</div>
      <ul className="list stacked-list">
        {ratings.map((rating) => (
          <li key={rating}>
            <label>
              <input
                type="radio"
                name="rating"
                checked={Number(productState.rating) === rating}
                value={rating}
                onMouseUp={(e) => {
                  productDispatch({
                    type: RATING_CHANGE,
                    payload: e.target.value,
                  });
                }}
              />
              {rating} ★ & above
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
