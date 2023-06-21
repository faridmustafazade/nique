import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../Redux/Actions/auth";
import favicon from "../../../Assets/Images/favicon.jpg";
import "./style.scss";
const Login = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const authFunc = () => {
    dispatch(loginAction(authData));
  };
  return (
    <>
      <Helmet>
        <title>Admin</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div className="full-div">
        <div className="div">
          <h1 className="h1">Admin Dashboard</h1>
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
              className="input"
              placeholder="name@company.com"
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
              placeholder="••••••••"
              className="input"
            />
          </div>
          <div onClick={authFunc} className="button">
            Log in
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
