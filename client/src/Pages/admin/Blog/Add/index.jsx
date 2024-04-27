import React from "react";
import Aside from "../../../../Layouts/admin/Aside";
import Header from "../../../../Layouts/admin/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddForm } from "./schema/AddForm";
import "./style.scss";
import axios from "axios";
import useToken from "../../../../Hooks/useToken";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import favicon from "../../../../Assets/Images/favicon.jpg";
import { toast } from "react-toastify";
import { Base_Url } from "../../../../api/Base_Url";

const AddBlog = () => {
  const [token] = useToken();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddForm),
  });

  const postData = () => {
    const values = getValues();
    console.log(values);
    axios
      .post(`${Base_Url}/api/blog`, {
        image: values.image,
        description: values.description,
        about: values.about,
        history: values.history,
        history2: values.history2,
        date: values.date,
      })
      .then((res) => {
        toast.success(res.data.msg, {
          position: "top-right",
          autoClose: 1000,
        });
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
        <title>Add-Blog</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      {!token?.token ? (
        navigate("/login-admin")
      ) : token?.user?.isAdmin === true ? (
        <div className="add-full">
          <Aside />
          <div className="side-right">
            <Header />
            <div className="side-down">
              <h1 className="down-h1">Add Blog</h1>
              <form onSubmit={handleSubmit(postData)} className="white-div">
                <div>
                  <label>Enter image</label>
                  <input {...register("image")} placeholder="Enter image" />
                  {errors.image?.message && (
                    <p style={{ color: "#face8d" }}>{errors.image?.message}</p>
                  )}
                </div>
                <div>
                  <label>Enter description</label>
                  <input
                    {...register("description")}
                    placeholder="Enter description"
                  />
                  {errors.description?.message && (
                    <p style={{ color: "#face8d" }}>
                      {errors.description?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label>Enter about</label>
                  <input {...register("about")} placeholder="Enter about" />
                  {errors.about?.message && (
                    <p style={{ color: "#face8d" }}>{errors.about?.message}</p>
                  )}
                </div>
                <div>
                  <label>Enter history</label>
                  <input {...register("history")} placeholder="Enter history" />
                  {errors.history?.message && (
                    <p style={{ color: "#face8d" }}>
                      {errors.history?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label>Enter history2</label>
                  <input
                    {...register("history2")}
                    placeholder="Enter history2"
                  />
                  {errors.history2?.message && (
                    <p style={{ color: "#face8d" }}>
                      {errors.history2?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label>Enter Date</label>
                  <input
                    name="date"
                    type="date"
                    {...register("date")}
                    placeholder="Enter date"
                  />
                  {errors.date?.message && (
                    <p style={{ color: "#face8d" }}>{errors.date?.message}</p>
                  )}
                </div>

                <button className="editing" type="submit">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        navigate("/login-admin")
      )}
    </>
  );
};

export default AddBlog;
