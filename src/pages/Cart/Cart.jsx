import "./Cart.css";
import { useProduct } from "../../context/product-context";
import { PriceDetail, CartProduct } from "./components";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { productState } = useProduct();
  const { cart } = productState;
  return (
    <main className="main-cart-section">
      {!cart.length ? (
        <div className="empty-container">
          <div className="empty-info">
            Your cart is empty! Add items to it now.
          </div>
          <Link
            className="btn primary-btn-solid text-center"
            to="/product-list"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="cart-body">
          <div className="cart-product-section">
            <div className="cart-header">
              <h3>My Cart</h3>
            </div>
            <div className="border-bottom"></div>
            <CartProduct />
          </div>
          <PriceDetail />
        </div>
      )}
    </main>
  );
};
