import { Link } from "react-router-dom";
const ProductVerticalCard = () => {
  return (
    <>
      <div className="content-field">
        <div className="card vertical-card">
          <Link to="">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71acreEz40L.jpg"
              alt=""
              className="responsive-img content-img"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductVerticalCard;
