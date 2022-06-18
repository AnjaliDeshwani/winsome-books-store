import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/product-context";
import { SEARCH } from "../../utils/constants";

export const SearchBar = () => {
  const { productDispatch } = useProduct();
  const navigate = useNavigate();

  const searchChangeHandler = (e) => {
    productDispatch({
      type: SEARCH,
      payload: e.target.value,
    });
    navigate("/product-list");
  };

  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar input-txt"
        placeholder="Type to search"
        onChange={debounce(searchChangeHandler, 500)}
      />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
};
