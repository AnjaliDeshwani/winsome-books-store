import { useProduct } from "../../../context/product-context";
import {
  getDiscountPercent,
  removeFromCart,
  moveToWishlist,
} from "../../../utils";
import { INC_QTY, DEC_QTY } from "../../../utils/constants";

export const CartProduct = () => {
  const { productState, productDispatch } = useProduct();
  const { cart } = productState;
  return (
    <div className="cart-items-container">
      {cart.map((product) => {
        const { img, title, author, discountedPrice, price, qty } = product;

        return (
          <div key={product._id}>
            <div className="product-conatiner">
              <div className="cart-item">
                <div className="item-image">
                  <img className="responsive-img" src={img} alt="product" />
                </div>
                <div className="item-details">
                  <div className="item-title">{title}</div>
                  <div className="item-subtitle">{author}</div>
                  <div className="card-price">
                    <span className="price-now">₹{discountedPrice}</span>
                    <span className="price-before"> ₹{price}</span>
                    <span className="discount">
                      {getDiscountPercent(
                        product.price,
                        product.discountedPrice
                      )}
                      %
                    </span>
                  </div>
                  <div className="coupon-details font-bold">
                    1 coupon & 2 offers applied
                  </div>
                </div>
                <div className="delivery-info font-bold">
                  Delivery by Mon Apr 4{" "}
                </div>
              </div>

              <div className="cart-options">
                <div className="quantity">
                  <button
                    className="quantity-btn"
                    onClick={() =>
                      productDispatch({
                        type: DEC_QTY,
                        payload: product,
                      })
                    }
                    disabled={qty === 1}
                  >
                    -
                  </button>
                  <span className="qantity-value">{qty}</span>
                  <button
                    className="quantity-btn"
                    onClick={() =>
                      productDispatch({
                        type: INC_QTY,
                        payload: product,
                      })
                    }
                  >
                    +
                  </button>
                </div>
                <div className="cart-actions">
                  <div
                    className="link-btn"
                    onClick={() => moveToWishlist(product, productDispatch)}
                  >
                    Add to Wishlist
                  </div>
                  <div
                    className="link-btn"
                    onClick={() => removeFromCart(product, productDispatch)}
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
