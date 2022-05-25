import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MainBenefit from "./MainBenefit/MainBenefit";
import "./MainBenefits.css";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";

const MainBenefits = (props) => {
  return (
    <div className="mainBenefits">
      <MainBenefit
        img={
          <FontAwesomeIcon
            icon={faTruckLoading}
            size="2x"
            color="darkslateblue"
          />
        }
        title="Free Shipping"
        text="Free delivery over $100"
      />
      <MainBenefit
        img={
          <FontAwesomeIcon icon={faTruckFast} size="2x" color="darkslateblue" />
        }
        title="24/7 delivery"
        text="Delivery at any time of the day"
      />
      <MainBenefit
        img={
          <FontAwesomeIcon
            icon={faArrowRotateLeft}
            size="2x"
            color="darkslateblue"
          />
        }
        title="Free returns"
        text="Returns without any difficulties"
      />
    </div>
  );
};

export default MainBenefits;
