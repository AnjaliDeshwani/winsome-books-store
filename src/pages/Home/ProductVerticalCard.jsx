import { Link } from "react-router-dom";
export const ProductVerticalCard = ({ product }) => {
  return (
    <div key={product._id} className="content-field">
      <div className="card vertical-card">
        <Link to={`/singleProduct/${product._id}`}>
          <img
            src={product.img}
            alt="product"
            className="responsive-img content-img"
          />
        </Link>
      </div>
    </div>
  );
};
