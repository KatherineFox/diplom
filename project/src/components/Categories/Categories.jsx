import React from "react";
import { faComputer, faTable } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faTablet } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Categories.css";

const Categories = (props) => {
  return (
    <div className="rows">
      <div className="items offset-lg-1 col-lg-10 offset-lg-1">
        <div className="item">
          <div className="itemContents">
            <FontAwesomeIcon
              icon={faComputer}
              color="darkslateblue"
              size="8x"
            />
            <NavLink className="itemLink" to="/categories/computers">
              <div className="itemText">Computers</div>
            </NavLink>
          </div>
        </div>
        <div className="item">
          <div className="itemContents">
            <FontAwesomeIcon icon={faLaptop} color="darkslateblue" size="8x" />
            <NavLink className="itemLink" to="/categories/laptops">
              <div className="itemText">Laptops</div>
            </NavLink>
          </div>
        </div>
        <div className="item">
          <div className="itemContents">
            <FontAwesomeIcon icon={faTv} color="darkslateblue" size="8x" />
            <NavLink className="itemLink" to="/categories/monitors">
              <div className="itemText">Monitors</div>
            </NavLink>
          </div>
        </div>
        <div className="item">
          <div className="itemContents">
            <FontAwesomeIcon icon={faTablet} color="darkslateblue" size="8x" />
            <NavLink className="itemLink" to="/categories/tablets">
              <div className="itemText">Tablets</div>
            </NavLink>
          </div>
        </div>
        <div className="item computerItem">
          <div className="itemContents">
            <FontAwesomeIcon
              icon={faKeyboard}
              color="darkslateblue"
              size="8x"
            />
            <NavLink className="itemLink" to="/categories/keyboards">
              <div className="itemText">Keyboards</div>
            </NavLink>
          </div>
        </div>
        <div className="item computerItem">
          <div className="itemContents">
            <FontAwesomeIcon icon={faMouse} color="darkslateblue" size="8x" />
            <NavLink className="itemLink" to="/categories/mouses">
              <div className="itemText">Mouses</div>
            </NavLink>
          </div>
        </div>
        <div className="item">
          <div className="itemContents">
            <FontAwesomeIcon
              icon={faHeadphones}
              color="darkslateblue"
              size="8x"
            />
            <NavLink className="itemLink" to="/categories/headphones">
              <div className="itemText">Headphones</div>
            </NavLink>
          </div>
        </div>
        <div className="item">
          <div className="itemContents">
            <FontAwesomeIcon icon={faBolt} color="darkslateblue" size="8x" />
            <NavLink className="itemLink" to="/categories/cables">
              <div className="itemText">Cables</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
