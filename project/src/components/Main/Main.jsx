import React from "react";
import "./Main.css";
import MainBlock from "./MainBlock/MainBlock";
import MainInfo from "./MainInfo/MainInfo";

const Main = (props) => {
  return (
    <div className="mainSection">
      <MainBlock />
      <MainInfo />
    </div>
  );
};

export default Main;
