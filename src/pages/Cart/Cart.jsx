import "./Cart.css";
import { useProduct } from "../../context/product-context";
import { PriceDetail, CartProduct } from "./components";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { productState } = useProduct();
  const { cart } = productState;
  return (
    <>
      {!cart.length ? (
        <div className="empty-container">
          <div className="empty-info">
            Your cart is empty! Add items to it now.
          </div>
          <button className="btn primary-btn-solid">
            <Link to="/product-list">Shop Now</Link>
          </button>
        </div>
      ) : (
        <main className="main-cart-section">
          <div className="cart-product-section">
            <div className="cart-header">
              <h3>My Cart</h3>
              <div className="deliver-section">
                <div className="deliver-text">
                  <span className="location-icon">
                    <i className="fa-solid fa-location-dot"> </i>
                  </span>
                  Deliver to
                </div>
                <div className="deliver-location">
                  <select name="" id="" className="location-dropdown">
                    <option>Gurgaon - 122001</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="border-bottom"></div>
            <CartProduct />

            <div className="cart-bottom">
              <button className="btn primary-btn-solid">Place Order</button>
            </div>
          </div>
          <PriceDetail />
        </main>
      )}
    </>
  );
};
