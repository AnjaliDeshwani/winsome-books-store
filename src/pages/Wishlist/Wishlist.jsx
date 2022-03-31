import "./Wishlist.css";
import { useProduct } from "../../context/product-context";
import {
  getDiscountPercent,
  removeFromWishlist,
  moveToCart,
} from "../../utils";

export const Wishlist = () => {
  const { productState, productDispatch } = useProduct();
  const { wishlist } = productState;
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
                          <button
                            className="btn primary-btn-outline"
                            onClick={() => moveToCart(product, productDispatch)}
                          >
                            Move To Cart
                          </button>
                        </div>
                        <div
                          className="delete-item"
                          onClick={() =>
                            removeFromWishlist(product, productDispatch)
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
