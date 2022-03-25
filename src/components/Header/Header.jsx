import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
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
                <Link to="/login">
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                  <span>Login</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/wishlist">
                  <span>
                    <i className="fas fa-heart"></i>
                  </span>
                  <span>Wishlist</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart">
                  <span>
                    <i className="fas fa-shopping-cart"></i>
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
