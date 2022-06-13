import React from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRegister } from "../../Redux/Actions/userActions";
import Loading from "../Loading/Loading";
import { useEffect } from "react";

const Register = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirection = location.search ? location.search.split("=")[1] : "/";

  const register = useSelector((state) => state.register);
  const { error, loading, userInfo } = register;

  useEffect(() => {
    if (userInfo) {
      navigate(redirection);
    }
  }, [userInfo, navigate, redirection]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userRegister(name, email, password));
  };
  return (
    <div>
      <div
        className="text-center"
        style={{
          width: "30%",
          marginLeft: "35%",
          marginTop: "20px",
          padding: "20px",
          borderRadius: "15px",
          fontSize: "20px",
          fontFamily: "sans-serif",
        }}
      >
        {error}
      </div>

      {loading && <Loading />}
      <form
        className="login offset-lg-4 col-lg-4 offset-lg-4"
        onSubmit={submitHandler}
      >
        <div className="formContent">
          <input
            className="formInput"
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="formInput"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="formInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary loginButton" type="submit">
            Register
          </button>
          <NavLink
            className="createAccountText"
            to={redirection ? `/login?redirect=${redirection}` : "/login"}
          >
            I Have An Account
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
