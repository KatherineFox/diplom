import React from "react";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  return (
    <div className=" form-container center">
      <div className="form">
        <label for="account-fn">UserName</label>
        <input
          className="form-control"
          type="text"
          placeholder="User"
          required
        />
      </div>
      <div className="form">
        <label for="account-email">Email adress</label>
        <input className="form-control" type="email" />
      </div>
      <div className="form">
        <label for="account-pass">New Password</label>
        <input className="form-control" type="password" />
      </div>
      <div className="form">
        <label for="account-confirm-pass">Confirm Password</label>
        <input className="form-control" type="password" />
      </div>
      <button className="btn updateButton" type="submit">
        Update Profile
      </button>
    </div>
  );
};

export default ProfileSettings;
