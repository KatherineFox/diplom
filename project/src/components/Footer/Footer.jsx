import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contactBlocks">
        <h3>Contact Us</h3>
        <div className="contacts">
          <div className="contactBlock">
            <FontAwesomeIcon icon={faPhone} size="lg" color="darkslateblue" />
            <span className="contactText">+(***) *** - ****</span>
          </div>
          <div className="contactBlock">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              color="darkslateblue"
            />
            <span className="contactText">contact@technogalaxy.com</span>
          </div>
        </div>{" "}
        <div className="footerRights">
          @ 2022 TechnoGalaxy . All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
