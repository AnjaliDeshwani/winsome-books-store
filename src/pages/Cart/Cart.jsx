import "./Cart.css";

const Cart = () => {
  return (
    <>
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
          <div className="product-conatiner">
            <div className="cart-item">
              <div className="item-image">
                <img
                  className="responsive-img"
                  src="../assets/Book1.jpg"
                  alt="product-image"
                />
              </div>
              <div className="item-details">
                <div className="item-title">Good Vibes, Good Life</div>
                <div className="item-subtitle">By Vex King</div>
                <div className="card-price">
                  <span className="price-now"> ₹769</span>
                  <span className="price-before"> ₹855</span>
                  <span className="discount">10%</span>
                </div>
              </div>
            </div>

            <div className="cart-options">
              <div className="link-btn">Save For Later</div>
              <div className="link-btn">Remove</div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="product-conatiner">
            <div className="cart-item">
              <div className="item-image">
                <img
                  className="responsive-img"
                  src="../assets/Book4.jpg"
                  alt="product-image"
                />
              </div>
              <div className="item-details">
                <div className="item-title">The Forty Rules of Love</div>
                <div className="item-subtitle">By Elif Shafak</div>
                <div className="card-price">
                  <span className="price-now"> ₹319</span>
                  <span className="price-before"> ₹450</span>
                  <span className="discount">29%</span>
                </div>
              </div>
            </div>

            <div className="cart-options">
              <div className="link-btn">Save For Later</div>
              <div className="link-btn">Remove</div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="cart-bottom">
            <button className="btn primary-btn-solid">Place Order</button>
          </div>
        </div>

        <div className="price-detail-section">
          <div className="price-detail-header">
            <h4 className="text-grey">Price Details</h4>
          </div>
          <div className="border-bottom"></div>
          <div className="price-deatil-body">
            <div className="price-div">
              <div className="items-price">
                <div className="left-deatil">Price (2 items)</div>
                <div className="right-detai">₹1,149</div>
              </div>
              <div className="items-discount">
                <div className="left-deatil">Discount</div>
                <div className="right-detai">− ₹581</div>
              </div>
              <div className="items-delivery">
                <div className="left-deatil">Delivery Charges</div>
                <div className="right-detai">₹48</div>
              </div>
            </div>

            <div className="total-price-div">
              <div className="total-amt font-semibold">
                <div className="left-deatil">Total Amount</div>
                <div className="right-detai">₹616</div>
              </div>
            </div>
          </div>
          <div className="price-detail-footer">
            <div className="footer-note font-semibold">
              You will save ₹533 on this order
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
