import "./Auth.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useShowPassword } from "../../Hooks/useShowPassword";
import { Loader } from "../../components";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, loginHandler, authError, loading } = useAuth();
  const [loginCred, setLoginCred] = useState({ email: "", password: "" });

  const guestLoginCred = {
    email: "anjali@gmail.com",
    password: "anjali@1997",
  };

  const { showPass, togglePassword } = useShowPassword();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginCred.email, loginCred.password);
  };

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || "/", { replace: true });
    }
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
                  <div className="input-group password-div">
                    <label className="input-label">Password</label>
                    <input
                      type={`${showPass ? "text" : "password"}`}
                      className="input-txt"
                      value={loginCred.password}
                      onChange={(e) =>
                        setLoginCred({ ...loginCred, password: e.target.value })
                      }
                      required
                    />
                    <span className="password-icon" onClick={togglePassword}>
                      <i
                        className={`fa-solid ${
                          showPass ? "fa-eye " : "fa-eye-slash"
                        }`}
                      ></i>
                    </span>
                  </div>
                </div>

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
      )}
    </>
  );
};
