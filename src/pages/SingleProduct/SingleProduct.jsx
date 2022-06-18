import "./SingleProduct.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useProduct } from "../../context/product-context";
import { useAuth } from "../../context/auth-context";
import {
  getDiscountPercent,
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../utils";

export const SingleProduct = () => {
  const { productId } = useParams();
  const { productState, productDispatch } = useProduct();
  const { token } = useAuth();

  const { data, cart, wishlist } = productState;
  const currentProduct = data.find((product) => product._id === productId);

  const inCart = cart.find((cartItem) => cartItem._id === currentProduct._id);
  const inWishlist = wishlist.find(
    (wishlistItem) => wishlistItem._id === currentProduct._id
  );
  return (
    <main className="single-section">
      <div className="single-card">
        <div className="left-part">
          <img
            src={currentProduct.img}
            alt="product"
            className="product-image"
          />
        </div>
        <div className="right-part">
          <div className="card-top">
            <h2 className="card-title">{currentProduct.title}</h2>
            <div className="card-rating">
              <span>{currentProduct.rating}</span>
              <i className="fa fa-star"></i>
            </div>
            <div className="card-price">
              <span className="price-now pl-0-5">
                ₹{currentProduct.discountedPrice}
              </span>
              <span className="price-before pl-0-5">
                ₹{currentProduct.price}
              </span>
              <span className="discount pl-0-5">
                {getDiscountPercent(
                  currentProduct.price,
                  currentProduct.discountedPrice
                )}
                %
              </span>
            </div>
          </div>

          <div className="card-tags">
            <div>
              <i className="fa-solid fa-check"></i> 7 Days Money Back Guarantee
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Cash on Delivery Available
            </div>
            <div>
              <i className="fa-solid fa-check"></i> All cards accepted
            </div>
          </div>
          <div className="border-bottom"></div>
          <div>
            <span className="font-bold">Product Details</span>
            <div className="product-details">
              <div className="detail">
                <span className="deatil-name">Author: </span>
                <span>{currentProduct.author}</span>
              </div>
              <div className="detail">
                <span className="deatil-name">Category: </span>
                <span>{currentProduct.categoryName}</span>
              </div>
              <div className="detail">
                <span className="deatil-name">Language: </span>
                <span>English</span>
              </div>
            </div>
          </div>

          {inCart ? (
            <Link className="btn primary-btn-solid text-center" to="/cart">
              Go to Cart
            </Link>
          ) : (
            <button
              className="btn primary-btn-solid"
              onClick={() => {
                addToCart(currentProduct, productDispatch, token);
              }}
            >
              Add to Cart
            </button>
          )}
          <button
            className={`like-icon ${inWishlist ? "liked" : ""}`}
            onClick={() => {
              inWishlist
                ? removeFromWishlist(currentProduct._id, productDispatch, token)
                : addToWishlist(currentProduct, productDispatch, token);
            }}
          >
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </main>
  );
};
