import React from "react";
import "./MainBenefit.css";

const MainBenefit = (props) => {
  return (
    <div className="benefitBlock">
      <div>{props.img}</div>
      <span className="benefitsTitle">{props.title}</span>
      <span className="benefitsText">{props.text}</span>
    </div>
  );
};

export default MainBenefit;
