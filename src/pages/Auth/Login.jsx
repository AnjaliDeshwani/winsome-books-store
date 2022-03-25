import { Link } from "react-router-dom";
import "./Auth.css";
const Login = () => {
  return (
    <>
      <main className="auth-section">
        <div className="auth-container">
          <div className="auth-title">
            <h2>Login</h2>
          </div>
          <div className="auth-body">
            <div className="auth-items">
              <div className="input-group">
                <label className="input-label">Email Address</label>
                <input type="text" className="input-txt" />
              </div>
            </div>
            <div className="auth-items">
              <div className="input-group">
                <label className="input-label">Password</label>
                <input type="password" className="input-txt" />
              </div>
            </div>
            <div className="auth-items checkbox-item">
              <div className="select-input">
                <input type="checkbox" className="remember-checkbox" />
                Remember Me
              </div>
              <Link to="" className="auth-link">
                Forgot your Password?
              </Link>
            </div>
            <div className="auth-items">
              <button className="btn primary-btn-solid">Login</button>
            </div>
            <div className="auth-items signup-item">
              Need an account?
              <Link to="/signup" className="auth-link">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
