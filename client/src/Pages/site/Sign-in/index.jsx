import React, { useState } from "react";
import { loginActions } from "../../../Redux/Actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import favicon from "../../../Assets/Images/favicon.jpg";
import "./style.scss";
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>Sign-In</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div className="full-sign">
        <div className="div">
          <h1 className="h1">Nique.</h1>
          <div className="inputs">
            <label htmlFor="email" className="label">
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

            <label htmlFor="password" className="label">
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
          <div className="changes" onClick={() => navigate("/change-password")}>
            Change Password?
          </div>
          <div className="link">
            Don't have an account?
            <span onClick={() => navigate("/sign-up")}> Sign up</span>
          </div>
          <div onClick={authFunc} className="button">
            Log in
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
