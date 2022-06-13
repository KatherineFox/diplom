import React from "react";
import "./MainBlock.css";
import { NavLink } from "react-router-dom";

const MainBlock = () => {
  return (
    <div className="mainBlock">
      <h1>Solve your IT-needs today!</h1>
      <NavLink to="/products">
        <button className="mainButton">Start shopping</button>
      </NavLink>
    </div>
  );
};

export default MainBlock;
