import "./ProductList.css";
import { Filters, ProductCard } from "./components";
import { useFilterHook } from "../../Hooks/FilterHooks";

export const ProductList = () => {
  const { filteredData } = useFilterHook();

  return (
    <>
      <main className="main-products-section">
        <Filters />
        <div className="products-section">
          <h3 className="product-heading">
            Showing Products
            <span className="product-heading-small text-grey text-regular">
              (Showing {filteredData.length} of all products)
            </span>
          </h3>
          <div className="product-list-grid">
            {filteredData.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
