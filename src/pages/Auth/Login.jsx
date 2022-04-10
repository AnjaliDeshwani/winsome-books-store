import "./Auth.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, loginHandler, authError } = useAuth();
  const [loginCred, setLoginCred] = useState({ email: "", password: "" });
  const guestLoginCred = {
    email: "test@gmail.com",
    password: "test@123",
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginCred.email, loginCred.password);
  };

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || "/", { replace: true });
    }
  }, [token]);
  return (
    <>
      <main className="auth-section">
        <div className="auth-container">
          <div className="auth-title">
            <h2>Login</h2>
          </div>

          <form className="auth-form" onSubmit={onSubmitHandler}>
            <div className="auth-body">
              <div className="auth-items">
                <div className="input-group">
                  <label className="input-label">Email Address</label>
                  <input
                    type="text"
                    className="input-txt"
                    value={loginCred.email}
                    onChange={(e) =>
                      setLoginCred({ ...loginCred, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="auth-items">
                <div className="input-group">
                  <label className="input-label">Password</label>
                  <input
                    type="password"
                    className="input-txt"
                    value={loginCred.password}
                    onChange={(e) =>
                      setLoginCred({ ...loginCred, password: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              {/* <div className="auth-items checkbox-item">
                <div className="select-input">
                  <input type="checkbox" className="remember-checkbox" />
                  Remember Me
                </div>
                <Link to="" className="auth-link">
                  Forgot your Password?
                </Link>
              </div> */}

              {authError.length > 0 && (
                <div className="auth-error">{authError}</div>
              )}
              <div className="auth-items action-btn">
                <button type="submit" className="btn primary-btn-solid">
                  Login
                </button>
                <button
                  type="submit"
                  className="btn primary-btn-solid"
                  onClick={() =>
                    setLoginCred({
                      email: guestLoginCred.email,
                      password: guestLoginCred.password,
                    })
                  }
                >
                  Login as Guest User
                </button>
              </div>

              <div className="auth-items signup-item">
                Need an account?
                <Link to="/signup" className="auth-link">
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
