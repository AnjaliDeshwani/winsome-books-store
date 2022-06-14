import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useProduct } from "../../context/product-context";
import { useAuth } from "../../context/auth-context";

export const Header = () => {
  const { productState } = useProduct();
  const { wishlist, cart } = productState;
  const { token, loginUser } = useAuth();
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            <img className="navbar-brand-logo" src={logo} alt="logo" />
            <h2 className="navbar-brand-heading">WINSOME BOOKS</h2>
          </Link>
          <div className="search-container">
            <input
              type="text"
              className="search-bar input-txt"
              placeholder="Type to search"
            />
            <button className="search-btn btn">
              <span className="search-icon">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
              Search
            </button>
          </div>
          <div className="nav-list">
            <ul className="list spaced-list">
              <li className="nav-item">
                {!token ? (
                  <Link to="/login">
                    <span className="badge-wrapper">
                      <i className="fas fa-user"></i>
                    </span>
                    <span>Login</span>
                  </Link>
                ) : (
                  <Link to="/profile">
                    <span className="badge-wrapper">
                      <i className="fa-solid fa-user-large"></i>
                    </span>
                    <span>Hi, {loginUser.firstName}</span>
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link to="/wishlist">
                  <span className="badge-wrapper">
                    <i className="fas fa-heart"></i>
                    {wishlist.length > 0 && (
                      <span className="badge-count red-badge">
                        {wishlist.length}
                      </span>
                    )}
                  </span>
                  <span>Wishlist</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart">
                  <span className="badge-wrapper">
                    <i className="fas fa-shopping-cart"></i>
                    {cart.length > 0 && (
                      <span className="badge-count red-badge">
                        {cart.length}
                      </span>
                    )}
                  </span>
                  <span>Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
