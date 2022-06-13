import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ value, text }) => {
  return (
    <div className="ratings">
      <i
        className={
          value >= 1
            ? { faStar }
            : value >= 0.5
            ? { faStarHalfAlt }
            : { faStar }
        }
      ></i>
      <i
        className={
          value >= 2
            ? { faStar }
            : value >= 1.5
            ? { faStarHalfAlt }
            : { faStar }
        }
      ></i>
      <i
        className={
          value >= 3
            ? { faStar }
            : value >= 2.5
            ? { faStarHalfAlt }
            : { faStar }
        }
      ></i>
      <i
        className={
          value >= 4
            ? { faStar }
            : value >= 3.5
            ? { faStarHalfAlt }
            : { faStar }
        }
      ></i>
      <i
        className={
          value >= 5
            ? { faStar }
            : value >= 4.5
            ? { faStarHalfAlt }
            : { faStar }
        }
      ></i>

      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
