import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-item footer-copy">
          Copyright © 2022 WINSOME-BOOKS.
        </div>
        <div className="footer-item">All Rights Reserved</div>
        <div className="footer-item">
          <div className="footer-icons">
            <a
              href="https://github.com/AnjaliDeshwani"
              target="_blank"
              className="footer-link"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <div className="footer-icons">
            <a
              href="https://twitter.com/anjali_deshwani"
              target="_blank"
              className="footer-link"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/anjalideshwani/"
              target="_blank"
              className="footer-link"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
