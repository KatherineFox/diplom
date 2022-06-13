import React, { useEffect } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loading from "./../Loading/Loading";
import { login } from "./../../Redux/Actions/userActions";

const Login = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirection = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirection);
    }
  }, [userInfo, navigate, redirection]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    navigate("/diplom");
  };
  return (
    <>
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
            Login
          </button>
          <NavLink
            className="createAccountText"
            to={redirection ? `/register?redirect=${redirection}` : "/register"}
          >
            Create Account
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default Login;
