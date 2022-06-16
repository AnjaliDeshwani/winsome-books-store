import { Link } from "react-router-dom";
import { useProduct } from "../../../context/product-context";
import {
  removeFromWishlist,
  addToWishlist,
  getDiscountPercent,
  addToCart,
} from "../../../utils";
import { useAuth } from "../../../context/auth-context";

export const ProductCard = ({ product }) => {
  const { productState, productDispatch } = useProduct();
  const { wishlist, cart } = productState;
  const inWishlist = wishlist.find(
    (wishlistItem) => wishlistItem._id === product._id
  );

  const inCart = cart.find((cartItem) => cartItem._id === product._id);
  const { token } = useAuth();

  return (
    <div className="card ecomm-card">
      <div className="card-head">
        <div className="image-badge-div">
          <img src={product.img} alt="card-pic" className="product-image" />
        </div>
      </div>

      <div className="card-body">
        <div className="card-title">{product.title}</div>
        <button
          className={`like-icon ${inWishlist ? "liked" : ""}`}
          onClick={() => {
            inWishlist
              ? removeFromWishlist(product._id, productDispatch, token)
              : addToWishlist(product, productDispatch, token);
          }}
        >
          <i className="fas fa-heart"></i>
        </button>
        <div className="card-text">{product.author}</div>
        <div className="card-price">
          <span className="price-now">₹{product.discountedPrice}</span>
          <span className="price-before">₹{product.price}</span>
          <span className="discount">
            {getDiscountPercent(product.price, product.discountedPrice)}%
          </span>
        </div>
        {inCart ? (
          <Link className="btn primary-btn-solid text-center" to="/cart">
            Go to Cart
          </Link>
        ) : (
          <button
            className="btn primary-btn-solid"
            onClick={() => {
              addToCart(product, productDispatch, token);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
