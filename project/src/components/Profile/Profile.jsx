import React from "react";
import "./Profile.css";
import profilePicture from "./ProfileAvatar.jpg";

const Profile = () => {
  return (
    <div className="profileBlocks">
      <div className="profileInfo">
        <img
          className="profileImage"
          height="100px"
          src={profilePicture}
          alt="profile picture"
        />
        <span>User</span>
        <button className="btn btn-primary profileButton">
          Change profile settings
        </button>
        <button className="btn btn-primary profileButton">
          Check my orders
        </button>
      </div>
    </div>
  );
};

export default Profile;
