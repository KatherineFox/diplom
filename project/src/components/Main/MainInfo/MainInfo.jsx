import React from "react";
import MainBenefits from "./MainBenefits/MainBenefits";
import "./MainInfo.css";

const MainInfo = (props) => {
  return (
    <div className="mainInfo">
      <div className="welcomeBlock">
        <h2>Welcome to the TehnoGalaxy</h2>
        <span className="welcomeText">
          We provide our customers a fast, convenient and easy-to-use online
          shop, where you can find any kind of computer technology you want!
          Here's why you should choose our company:
        </span>
      </div>
      <MainBenefits />
    </div>
  );
};

export default MainInfo;
