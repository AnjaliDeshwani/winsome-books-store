import "./ProductList.css";
import { useState, useEffect } from "react";
import { Filters, ProductCard } from "./components";
import { useFilterHook } from "../../Hooks/FilterHooks";
import { Loader } from "../../components";
import { useProduct } from "../../context/product-context";

export const ProductList = () => {
  const { filteredData } = useFilterHook();
  const [loading, setLoading] = useState(false);
  const {
    productState: { searchText },
  } = useProduct();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [searchText]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="main-products-section">
          <Filters />
          <div className="products-section">
            {filteredData.length > 0 ? (
              <>
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
              </>
            ) : (
              <h3 className="no-product">
                Whoops! We don't have any products that match your preference :(
              </h3>
            )}
          </div>
        </main>
      )}
    </>
  );
};
