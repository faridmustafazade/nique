import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { changePasswordSchema } from "./schema";
import { toast } from "react-toastify";
const ChangePassword = () => {
  const navigate = useNavigate();
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
      .post("http://localhost:2003/api/password", {
        email: values.email,
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
      })
      .then((res) => {
        toast.success(res.data.msg, {
          position: "top-right",
          autoClose: 5000,
        });
        navigate("/sign-in");
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          position: "top-right",
          autoClose: 5000,
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
              <p style={{ color: "#face8d" }}>{errors.email?.message}</p>
            )}
            <label htmlFor="currentPassword" className="label">
              Current Password
            </label>
            <input
              id="currentPassword"
              name="currentPassword"
              type="password"
              {...register("currentPassword")}
              placeholder="Password"
              className="input"
            />
            {errors.currentPassword?.message && (
              <p style={{ color: "#face8d" }}>
                {errors.currentPassword?.message}
              </p>
            )}
            <label htmlFor="newPassword" className="label">
              New Password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              {...register("newPassword")}
              placeholder="Password"
              className="input"
            />
            {errors.newPassword?.message && (
              <p style={{ color: "#face8d" }}>{errors.newPassword?.message}</p>
            )}
            <label htmlFor="confirmPassword" className="label">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              placeholder="Password"
              className="input"
            />
            {errors.confirmPassword?.message && (
              <p style={{ color: "#face8d" }}>
                {errors.confirmPassword?.message}
              </p>
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
