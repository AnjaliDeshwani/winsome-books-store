const ProductCard = () => {
  return (
    <div className="card ecomm-card">
      <div className="card-head">
        <div className="image-badge-div">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71acreEz40L.jpg"
            alt="card-pic"
            className="product-image"
          />
        </div>
      </div>

      <div className="card-body">
        <div className="card-title">Good Vibes, Good Life</div>
        <button className="like-icon">
          <span>
            <i className="fas fa-heart"></i>
          </span>
        </button>
        <div className="card-text">By Vex King</div>
        <div className="card-price">
          <span className="price-now"> ₹769</span>
          <span className="price-before"> ₹855</span>
          <span className="discount">10%</span>
        </div>
        <button className="btn primary-btn-solid add-">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
