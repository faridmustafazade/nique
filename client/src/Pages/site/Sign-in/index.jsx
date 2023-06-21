import React, { useState } from "react";
import { loginActions } from "../../../Redux/Actions/auth";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss"
const SignIn = () => {
  const navigate = useNavigate();

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunc = () => {
    dispatch(loginActions(authData));
  };
  console.log(authData);
  return (
    <div className="full-div">
      <div className="div">
        <h1 className="h1">
          Nique.
        </h1>
        <div className="inputs">
          <label
            htmlFor="email"
            className="label"
          >
            Email address
          </label>
          <input
            value={authData.email}
            name="email"
            onChange={onChange}
            type="text"
            id="email"
            placeholder="Email address"
            className="input"
          />

          <label
            htmlFor="password"
            className="label"
          >
            Password
          </label>
          <input
            value={authData.password}
            name="password"
            onChange={onChange}
            type="password"
            id="password"
            placeholder="Password"
            className="input"
          />
        </div>
        <div
          className="link"
          onClick={() => navigate("/sign-up")}
        >
          Don't have an account? Sign up
        </div>
        <div
          onClick={authFunc}
          className="button"
        >
          Log in
        </div>
      </div>
    </div>
  );
};

export default SignIn;
