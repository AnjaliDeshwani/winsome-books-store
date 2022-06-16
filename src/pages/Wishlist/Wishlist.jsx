import { Link } from "react-router-dom";
import "./Wishlist.css";
import { useProduct } from "../../context/product-context";
import {
  getDiscountPercent,
  removeFromWishlist,
  moveToCart,
} from "../../utils";
import { useAuth } from "../../context/auth-context";

export const Wishlist = () => {
  const { productState, productDispatch } = useProduct();
  const { wishlist, cart } = productState;
  const { token } = useAuth();

  return (
    <>
      <main className="wishlist-section">
        {!wishlist.length ? (
          <div className="empty-info">
            Empty Wishlist. You have no items in your wishlist. Start adding!
          </div>
        ) : (
          <div>
            <div className="wishlist-header">
              <h3>My Wishlist {wishlist.length}</h3>
            </div>
            <div className="border-bottom"></div>
            <div className="wishlist-items-container">
              {wishlist.map((product) => {
                const inCart = cart.find(
                  (cartItem) => cartItem._id === product._id
                );
                return (
                  <div key={product._id}>
                    <div className="wishlist-item">
                      <div className="item-image">
                        <img
                          className="responsive-img"
                          src={product.img}
                          alt="product"
                        />
                      </div>
                      <div className="item-details">
                        <div className="item-title">{product.title}</div>
                        <div className="item-subtitle">By {product.author}</div>
                        <div className="card-price">
                          <span className="price-now">
                            {" "}
                            ₹{product.discountedPrice}
                          </span>
                          <span className="price-before">₹{product.price}</span>
                          <span className="discount">
                            {" "}
                            {getDiscountPercent(
                              product.price,
                              product.discountedPrice
                            )}
                            %
                          </span>
                        </div>
                      </div>
                      <div className="action-items">
                        <div className="move-to-cart">
                          {inCart ? (
                            <Link
                              className="btn primary-btn-outline"
                              to="/cart"
                            >
                              Already in Cart
                            </Link>
                          ) : (
                            <button
                              className="btn primary-btn-outline"
                              onClick={() =>
                                moveToCart(product, productDispatch, token)
                              }
                            >
                              Move To Cart
                            </button>
                          )}
                        </div>
                        <div
                          className="delete-item"
                          onClick={() =>
                            removeFromWishlist(
                              product._id,
                              productDispatch,
                              token
                            )
                          }
                        >
                          <span className="delete-icon">
                            <i className="fa-solid fa-trash"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom"></div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </>
  );
};
