import "./Home.css";
import { Link } from "react-router-dom";
import { ProductVerticalCard } from "../../components";

export const Home = () => {
  const showProduct = () => [...Array(4)].map(() => <ProductVerticalCard />);

  return (
    <>
      <section className="slider-section">
        <div className="image-container">
          <div className="bg-image"></div>
          <div className="caption">
            <div className="text-xlarge font-semibold">
              You will find the world’s great literature here...
            </div>
            <Link to="/product-list">
              <button className="btn primary-btn-solid font-semibold">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>
      <main className="main-section">
        <div className="main-container">
          <div className="content-wrapper">
            <Link to="">
              <h2 className="h2 content-heading">Non-Fiction</h2>
            </Link>
            <div className="content-block">{showProduct()}</div>
            <button className="btn primary-btn-solid font-semibold">
              View All Books
            </button>
          </div>

          <div className="content-wrapper">
            <Link to="">
              <h2 className="h2 content-heading">Fiction</h2>
            </Link>
            <div className="content-block">{showProduct()}</div>
            <button className="btn primary-btn-solid font-semibold">
              View All Books
            </button>
          </div>

          <div className="content-wrapper">
            <Link to="">
              <h2 className="h2 content-heading">Children</h2>
            </Link>
            <div className="content-block">{showProduct()}</div>
            <button className="btn primary-btn-solid font-semibold">
              View All Books
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
