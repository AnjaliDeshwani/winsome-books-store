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
    <Link to={`/singleProduct/${product._id}`} className="card ecomm-card">
      <div className="card-head">
        <div className="image-badge-div">
          <img src={product.img} alt="card-pic" className="product-image" />
        </div>
      </div>

      <div className="card-body">
        <div className="card-title">{product.title}</div>
        <button
          className={`like-icon ${inWishlist ? "liked" : ""}`}
          onClick={(e) => {
            inWishlist
              ? removeFromWishlist(product._id, productDispatch, token)
              : addToWishlist(product, productDispatch, token);
            e.preventDefault();
          }}
        >
          <i className="fas fa-heart"></i>
        </button>
        <div className="card-text">{product.author}</div>
        <div className="card-bottom">
          <div className="card-price">
            <span className="price-now pl-0-5">₹{product.discountedPrice}</span>
            <span className="price-before pl-0-5">₹{product.price}</span>
            <span className="discount pl-0-5">
              {getDiscountPercent(product.price, product.discountedPrice)}%
            </span>
          </div>
          <div className="card-rating">
            <span>{product.rating}</span>
            <i className="fa fa-star"></i>
          </div>
        </div>
        {inCart ? (
          <Link className="btn primary-btn-solid text-center" to="/cart">
            Go to Cart
          </Link>
        ) : (
          <button
            className="btn primary-btn-solid"
            onClick={(e) => {
              addToCart(product, productDispatch, token);
              e.preventDefault();
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};
