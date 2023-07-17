import React, { useState } from "react";
import { loginActions } from "../../../Redux/Actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import favicon from "../../../Assets/Images/favicon.jpg";
import "./style.scss";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import { Helmet } from "react-helmet";
const SignIn = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunc = (e) => {
    e.preventDefault();
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
          <form onSubmit={authFunc} className="inputs">
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
            <div style={{ position: "relative" }}>
              <input style={{width:"100%"}}
                value={authData.password}
                name="password"
                onChange={onChange}
                type={show ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="input"
              />
              <label style={{cursor:"pointer",fontSize:20,position:'absolute',right:'15px',top:'16px'}} onClick={handleShow}>
                {show ? <BsEyeFill /> : <BsEyeSlashFill />}
              </label>
            </div>
            <button type="submit" className="button">
              Log in
            </button>
          </form>
          <div className="link">
            Don't have an account?
            <span onClick={() => navigate("/sign-up")}> Sign up</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
