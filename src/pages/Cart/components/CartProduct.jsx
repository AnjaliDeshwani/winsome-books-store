import { Link } from "react-router-dom";
import { useProduct } from "../../../context/product-context";
import {
  getDiscountPercent,
  removeFromCart,
  moveToWishlist,
  updateCartItem,
} from "../../../utils";
import { useAuth } from "../../../context/auth-context";

export const CartProduct = () => {
  const { productState, productDispatch } = useProduct();
  const { wishlist, cart } = productState;
  const { token } = useAuth();
  const updateQtyHandler = (productId, actionType) =>
    updateCartItem(productId, productDispatch, actionType, token);

  return (
    <div className="cart-items-container">
      {cart.map((product) => {
        const { img, title, author, discountedPrice, price, qty } = product;
        const inWishlist = wishlist.find(
          (wishlistItem) => wishlistItem._id === product._id
        );
        return (
          <div key={product._id}>
            <div className="product-conatiner">
              <div className="cart-item">
                <div className="item-image">
                  <img className="responsive-img" src={img} alt="product" />
                </div>
                <Link
                  to={`/singleProduct/${product._id}`}
                  className="item-details"
                >
                  <div className="item-title">{title}</div>
                  <div className="item-subtitle">{author}</div>
                  <div className="card-price">
                    <span className="price-now">₹{discountedPrice * qty}</span>
                    <span className="price-before"> ₹{price * qty}</span>
                    <span className="discount">
                      {getDiscountPercent(
                        product.price,
                        product.discountedPrice
                      )}
                      %
                    </span>
                  </div>
                  <div className="coupon-details font-bold">
                    No coupons & offers applied
                  </div>
                </Link>
                <div className="delivery-info font-bold">
                  Delivery by Mon Apr 4{" "}
                </div>
              </div>

              <div className="cart-options">
                <div className="quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQtyHandler(product._id, "DEC_QTY")}
                    disabled={qty === 1}
                  >
                    -
                  </button>
                  <span className="qantity-value">{qty}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQtyHandler(product._id, "INC_QTY")}
                  >
                    +
                  </button>
                </div>
                <div className="cart-actions">
                  {inWishlist ? (
                    <Link className="btn primary-btn-outline" to="/wishlist">
                      Already in Wishlist
                    </Link>
                  ) : (
                    <div
                      className="btn primary-btn-outline"
                      onClick={() =>
                        moveToWishlist(product, productDispatch, token)
                      }
                    >
                      Add to Wishlist
                    </div>
                  )}
                  <div
                    className="btn primary-btn-outline"
                    onClick={() =>
                      removeFromCart(product._id, productDispatch, token)
                    }
                  >
                    Remove
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom"></div>
          </div>
        );
      })}
    </div>
  );
};
