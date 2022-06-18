import "./Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-item">
          <div className="footer-copy fw-bold">
            Copyright © 2022 WINSOME-BOOKS.
          </div>
          <div>All Rights Reserved</div>
          <div className="footer-icons fs-1-25">
            <a
              href="https://github.com/AnjaliDeshwani"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <i className="fa-brands fa-github fa-icon"></i>
            </a>

            <a
              href="https://twitter.com/anjali_deshwani"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <i className="fa-brands fa-twitter fa-icon"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/anjalideshwani/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <i className="fa-brands fa-linkedin-in fa-icon"></i>
            </a>
          </div>
        </div>
        <div className="footer-item">
          <span className="fw-600">Quick Links</span>
          <div className="quick-links">
            <Link to="/product-list">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">Wishlist</Link>
          </div>
        </div>
        <div className="footer-item">
          <span className="fw-600">Contact Us</span>
          <div className="contact-details">
            <span>
              <i className="fa-solid fa-location-dot fa-icon"></i>
              <span className="ml-0-5">1111 Central Lounge, New delhi</span>
            </span>
            <span>
              <i className="fa-solid fa-phone fa-icon"></i>
              <span className="ml-0-5">+91 2184419293</span>
            </span>
            <span>
              <i className="fa-solid fa-envelope fa-icon"></i>
              <span className="ml-0-5">support@winsomebooks.com</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
