import "./Filters.css";
const Filters = () => {
  return (
    <div className="filter-section">
      <div className="filter-block">
        <div className="filter-text">
          <div className="font-bold">Filters</div>
          <div>
            <span className="clear-all-btn font-semibold">Clear all</span>
          </div>
        </div>
        <div className="filter-price">
          <div className="font-bold">Price</div>
          <ul className="list stacked-list">
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">Under ₹100</label>
            </li>
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">₹100 - ₹300</label>
            </li>
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">₹300 - ₹700</label>
            </li>
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">₹700 - ₹1,000</label>
            </li>
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">Over ₹1,000</label>
            </li>
          </ul>
        </div>
        <div className="filter-category">
          <div className="font-bold">Categories</div>
          <ul className="list stacked-list">
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">Literature and Fiction</label>
            </li>
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">Crime, Suspense and Thrillers</label>
            </li>
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">Romance</label>
            </li>
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">Children Stories</label>
            </li>
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">Nonfiction</label>
            </li>
          </ul>
        </div>
        <div className="filter-ratings">
          <div className="font-bold">Ratings</div>
          <ul className="list stacked-list">
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">4★ & above</label>
            </li>
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">3★ & above</label>
            </li>
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">2★ & above</label>
            </li>
            <li>
              <input type="checkbox" name="" value="" />
              <label for="">1★ & above</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
