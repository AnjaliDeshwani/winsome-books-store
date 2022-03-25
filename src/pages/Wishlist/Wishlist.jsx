import "./Wishlist.css";

const Wishlist = () => {
  return (
    <>
      <main className="wishlist-section">
        <div className="wishlist-header">
          <h3>My Wishlist</h3>
        </div>
        <div className="border-bottom"></div>
        <div className="wishlist-items-container">
          <div className="wishlist-item">
            <div className="item-image">
              <img
                className="responsive-img"
                src="../assets/Book1.jpg"
                alt="product"
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
            <div className="action-items">
              <div className="move-to-cart">
                <button className="btn primary-btn-outline">
                  Move To Cart
                </button>
              </div>
              <div className="delete-item">
                <span className="delete-icon">
                  <i className="fa-solid fa-trash"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="wishlist-item">
            <div className="item-image">
              <img
                className="responsive-img"
                src="../assets/Book3.jpg"
                alt="product"
              />
            </div>
            <div className="item-details">
              <div className="item-title">The Little Prince</div>
              <div className="item-subtitle">By Antoine</div>
              <div className="card-price">
                <span className="price-now"> ₹769</span>
                <span className="price-before"> ₹855</span>
                <span className="discount">10%</span>
              </div>
            </div>
            <div className="action-items">
              <div className="move-to-cart">
                <button className="btn primary-btn-outline">
                  Move To Cart
                </button>
              </div>
              <div className="delete-item">
                <span className="delete-icon">
                  <i className="fa-solid fa-trash"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Wishlist;
