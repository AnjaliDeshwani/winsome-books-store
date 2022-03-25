import "./ProductList.css";
import { Filters, ProductCard } from "../../components";

export const ProductList = () => {
  return (
    <>
      <main className="main-products-section">
        <Filters />
        <div className="products-section">
          <h3 className="product-heading">
            Showing Products
            <span className="product-heading-small text-grey text-regular">
              (Showing 1 – 20 products of 20 products)
            </span>
          </h3>
          <div className="product-list-grid">
            {[...Array(5)].map(() => (
              <ProductCard />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
