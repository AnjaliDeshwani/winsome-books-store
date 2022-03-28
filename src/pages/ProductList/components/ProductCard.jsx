export const ProductCard = ({ product }) => {
  const discountPercent = (price, discountedPrice) => {
    return Math.round((1 - discountedPrice / price) * 100);
  };

  return (
    <div className="card ecomm-card">
      <div className="card-head">
        <div className="image-badge-div">
          <img src={product.img} alt="card-pic" className="product-image" />
        </div>
      </div>

      <div className="card-body">
        <div className="card-title">{product.title}</div>
        <button className="like-icon">
          <span>
            <i className="fas fa-heart"></i>
          </span>
        </button>
        <div className="card-text">{product.author}</div>
        <div className="card-price">
          <span className="price-now">₹{product.discountedPrice}</span>
          <span className="price-before">₹{product.price}</span>
          <span className="discount">
            {discountPercent(product.price, product.discountedPrice)}%
          </span>
        </div>
        <button className="btn primary-btn-solid add-">Add to cart</button>
      </div>
    </div>
  );
};
