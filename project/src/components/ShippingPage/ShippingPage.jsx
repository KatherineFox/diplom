import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ShippingPage.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingAddress } from "./../../Redux/Actions/cartActions";
import { useNavigate } from "react-router";

const ShippingPage = () => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/placeorder");
  };
  return (
    <div>
      <form
        className="login offset-lg-4 col-lg-4 offset-lg-4"
        onSubmit={submitHandler}
      >
        <div className="formContent">
          <span
            className="text-center"
            style={{ fontSize: "20px", fontFamily: "sans-serif" }}
          >
            Delivery Adress
          </span>
          <input
            className="formInput"
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            className="formInput"
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className="formInput"
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="formInput"
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <button
            className="btn btn-primary loginButton"
            style={{ margin: "10px 60px", padding: "25px 10px" }}
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};
export default ShippingPage;
