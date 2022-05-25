import React from "react";
import "./CategoryBlock.css";

const CategoryBlock = (props) => {
  return (
    <div className="categoryBlock">
      {props.img}
      {props.text}
    </div>
  );
};

export default CategoryBlock;
