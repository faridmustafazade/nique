import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { changePasswordSchema } from "./schema";
import { toast } from "react-toastify";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Base_Url } from "../../../api/Base_Url";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const [show2, setShow2] = useState(false);
  const handleShow2 = () => {
    setShow2(!show2);
  };
  const [show3, setShow3] = useState(false);
  const handleShow3 = () => {
    setShow3(!show3);
  };
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const postData = () => {
    const values = getValues();
    console.log(values);
    axios
      .post(`${Base_Url}/api/password`, {
        email: values.email,
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
      })
      .then((res) => {
        toast.success(res.data.msg, {
          position: "top-right",
          autoClose: 1000,
        });
        navigate("/sign-in");
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          position: "top-right",
          autoClose: 1000,
        });
      });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Change-Password</title>
      </Helmet>

      <div className="full-change">
        <form onSubmit={handleSubmit(postData)} className="div">
          <h1 className="h1">Nique.</h1>
          <p className="p">Change Password</p>
          <div className="inputs">
            <label htmlFor="email" className="label">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              {...register("email")}
              placeholder="Email"
              className="input"
            />

            {errors.email?.message && (
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            )}

            <label htmlFor="currentPassword" className="label">
              Current Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                style={{ width: "100%" }}
                id="currentPassword"
                name="currentPassword"
                type={show ? "text" : "password"}
                {...register("currentPassword")}
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
            {errors.currentPassword?.message && (
              <p style={{ color: "red" }}>{errors.currentPassword?.message}</p>
            )}
            <label htmlFor="newPassword" className="label">
              New Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                style={{ width: "100%" }}
                id="newPassword"
                name="newPassword"
                type={show2 ? "text" : "password"}
                {...register("newPassword")}
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
                onClick={handleShow2}
              >
                {show2 ? <BsEyeFill /> : <BsEyeSlashFill />}
              </label>
            </div>
            {errors.newPassword?.message && (
              <p style={{ color: "red" }}>{errors.newPassword?.message}</p>
            )}
            <label htmlFor="confirmPassword" className="label">
              Confirm Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                style={{ width: "100%" }}
                id="confirmPassword"
                name="confirmPassword"
                type={show3 ? "text" : "password"}
                {...register("confirmPassword")}
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
                onClick={handleShow3}
              >
                {show3 ? <BsEyeFill /> : <BsEyeSlashFill />}
              </label>
            </div>
            {errors.confirmPassword?.message && (
              <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
            )}
          </div>
          <button type="submit" className="button">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
