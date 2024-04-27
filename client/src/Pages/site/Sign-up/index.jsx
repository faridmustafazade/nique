import React, { useState } from "react";
import { registerActions } from "../../../Redux/Actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import "./style.scss";
import favicon from "../../../Assets/Images/favicon.jpg";
import { Helmet } from "react-helmet";
const SignUp = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const [authData, setAuthData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    image: null,
  });
  const dispatch = useDispatch();

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setAuthData({ ...authData, image: base64 });
  };

  const onChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunc = () => {
    // Convert the image value to a string
    const data = {
      ...authData,
      image: authData.image ? authData.image.toString() : "",
    };
    dispatch(registerActions(data));
  };

  console.log(authData);
  return (
    <>
      <Helmet>
        <title>Sign-Up</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div className="full-divs">
        <div className="div">
          <h1 className="h1">Nique.</h1>
          <div className="inputs">
            <label htmlFor="firstName" className="label">
              First Name
            </label>
            <input
              value={authData.firstName}
              name="firstName"
              onChange={onChange}
              type="text"
              placeholder="Firstname"
              className="input"
            />
            <label htmlFor="lastName" className="label">
              Last Name
            </label>
            <input
              value={authData.lastName}
              name="lastName"
              onChange={onChange}
              type="text"
              placeholder="Lastname"
              className="input"
            />
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              value={authData.username}
              name="username"
              onChange={onChange}
              type="text"
              placeholder="Username"
              className="input"
            />
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
              <input
                style={{ width: "100%" }}
                value={authData.password}
                name="password"
                onChange={onChange}
                type={show ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="input"
              />
              <label
                style={{
                  cursor: "pointer",
                  fontSize: 20,
                  position: "absolute",
                  right: "15px",
                  top: "16px",
                }}
                onClick={handleShow}
              >
                {show ? <BsEyeFill /> : <BsEyeSlashFill />}
              </label>
            </div>
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <input
              value={authData.phone}
              name="phone"
              onChange={onChange}
              type="number"
              id="phone"
              placeholder="Phone"
              className="input"
            />

            <label htmlFor="birthday" className="label">
              Birthday
            </label>
            <input
              id="birthday"
              name="birthday"
              type="date"
              onChange={onChange}
              value={authData.birthday}
              className="input f"
            />

            <label htmlFor="image" className="label">
              Image
            </label>
            
            <input
              id="image"
              name="image"
              type="file" // Set input type to 'file'
              className="input input-1"
              onChange={(e) => handleFileUpload(e)}
            />
          </div>
          <div className="link">
            Have an account?
            <span onClick={() => navigate("/sign-in")}> Log in</span>
          </div>
          <div onClick={authFunc} className="button">
            Sign Up
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
