import "./Auth.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useShowPassword } from "../../Hooks/useShowPassword";
import { Loader } from "../../components";

export const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, signUpHandler, authError, loading } = useAuth();
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { showPass, togglePassword } = useShowPassword();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    signUpHandler(
      signUpForm.firstName,
      signUpForm.lastName,
      signUpForm.email,
      signUpForm.password
    );
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
              <h2>Sign Up</h2>
            </div>

            <form className="auth-form" onSubmit={onSubmitHandler}>
              <div className="auth-body">
                <div className="auth-items">
                  <div className="input-group">
                    <label className="input-label">First Name</label>
                    <input
                      type="text"
                      className="input-txt"
                      onChange={(e) =>
                        setSignUpForm({
                          ...signUpForm,
                          firstName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="auth-items">
                  <div className="input-group">
                    <label className="input-label">Last Name</label>
                    <input
                      type="text"
                      className="input-txt"
                      onChange={(e) =>
                        setSignUpForm({
                          ...signUpForm,
                          lastName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="auth-items">
                  <div className="input-group">
                    <label className="input-label">Email</label>
                    <input
                      type="email"
                      className="input-txt"
                      onChange={(e) =>
                        setSignUpForm({ ...signUpForm, email: e.target.value })
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
                      onChange={(e) =>
                        setSignUpForm({
                          ...signUpForm,
                          password: e.target.value,
                        })
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
            </form>
          </div>
        </main>
      )}
    </>
  );
};
