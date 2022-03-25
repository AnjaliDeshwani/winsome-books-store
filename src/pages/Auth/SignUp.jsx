import "./Auth.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <>
      <main className="auth-section">
        <div className="auth-container">
          <div className="auth-title">
            <h2>Sign Up</h2>
          </div>
          <div className="auth-body">
            <div className="auth-items">
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input type="text" className="input-txt" />
              </div>
            </div>
            <div className="auth-items">
              <div className="input-group">
                <label className="input-label">Email</label>
                <input type="text" className="input-txt" />
              </div>
            </div>
            <div className="auth-items">
              <div className="input-group">
                <label className="input-label">Password</label>
                <input type="password" className="input-txt" />
              </div>
            </div>

            <div className="auth-items">
              <button className="btn primary-btn-solid">Sign up</button>
            </div>
            <div className="auth-items signup-item">
              Already have an account?
              <Link to="/login" className="auth-link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
