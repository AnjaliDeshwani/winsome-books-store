import { Link } from "react-router-dom";
import page404 from "../../assets/page404.png";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div class="notFound-container">
      <img src={page404} alt="404error" />
      <h2>404 error: The requested URL was not found on this server.</h2>
      <Link to="/" className="btn primary-btn-solid font-semibold">
        Go to Home
      </Link>
    </div>
  );
};

export { PageNotFound };
