import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useProduct } from "../../context/product-context";
import { ProductVerticalCard } from "./ProductVerticalCard";
import { CATEGORY_CHANGE } from "../../utils/constants";
import { getAllCategoriesService } from "../../services";

export const Home = () => {
  const navigate = useNavigate();
  const { productState, productDispatch } = useProduct();
  const { data } = productState;
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllCategoriesService();
        setCategoryData(data.categories);
      } catch (error) {
        console.error("Error in fetching categories", error);
      }
    })();
  }, []);

  const showCategoryBooks = (categoryName) => {
    return data
      .filter((item) => item.categoryName === categoryName)
      .map((item) => <ProductVerticalCard product={item} key={item._id} />);
  };

  const showByCategory = (categoryName) => {
    productDispatch({
      type: CATEGORY_CHANGE,
      payload: { [categoryName]: true },
    });
    navigate("/product-list");
  };
  return (
    <>
      <section className="slider-section">
        <div className="image-container">
          <div className="bg-image"></div>
          <div className="bg-overlay"></div>
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
          {categoryData.map(({ categoryName, _id }) => {
            return (
              <div key={_id} className="content-wrapper">
                <h2
                  className="h2 content-heading"
                  onClick={() => showByCategory(categoryName)}
                >
                  {categoryName}
                </h2>

                <div className="content-block">
                  {showCategoryBooks(categoryName)}
                </div>
                <button
                  className="btn primary-btn-solid font-semibold"
                  onClick={() => showByCategory(categoryName)}
                >
                  View All Books
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};
