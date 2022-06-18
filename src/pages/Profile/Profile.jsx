import "./Profile.css";
import { useAuth } from "../../context/auth-context";

export const Profile = () => {
  const { loginUser, logoutHandler } = useAuth();
  return (
    <main className="profile-section">
      <div className="profile-container">
        <div className="profile-header">
          <h3>Profile Details</h3>
        </div>
        <div className="border-bottom"></div>
        <div className="profile-body">
          <div className="profile-item">
            <span className="font-bold">Name :</span>
            <span className="">
              {loginUser.firstName} {loginUser.lastName}
            </span>
          </div>
          <div className="profile-item">
            <span className="font-bold">Email :</span>
            <span>{loginUser.email}</span>
          </div>
          <button
            className="btn primary-btn-solid font-bold logout-btn"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
};
