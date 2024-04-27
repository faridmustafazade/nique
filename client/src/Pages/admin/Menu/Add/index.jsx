import React, { useEffect, useState } from "react";
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

const AddMenu = () => {
  const [token] = useToken();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);

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
      .post(`${Base_Url}/api/menu`, {
        image: values.image,
        name: values.name,
        price: values.price,
        category: values.category,
        about: values.about,
        class: values.class,
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

  const getCategory = async () => {
    const response = await axios.get(`${Base_Url}/api/menu_category`);
    setCategories(response.data);
  };
  const getClasses = async () => {
    const res = await axios.get(`${Base_Url}/api/classes`);
    setData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getCategory();
    getClasses();
  });

  return (
    <>
      <Helmet>
        <title>Add-Menu</title>
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
              <h1 className="down-h1">Add Menu</h1>
              <form onSubmit={handleSubmit(postData)} className="white-div">
                <div>
                  <label>Enter image</label>
                  <input {...register("image")} placeholder="Enter image" />
                  {errors.image?.message && (
                    <p style={{ color: "#face8d" }}>{errors.image?.message}</p>
                  )}
                </div>
                <div>
                  <label>Enter name</label>
                  <input {...register("name")} placeholder="Enter name" />
                  {errors.name?.message && (
                    <p style={{ color: "#face8d" }}>{errors.name?.message}</p>
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
                  <label>Enter price</label>
                  <input {...register("price")} placeholder="Enter price" />
                  {errors.price?.message && (
                    <p style={{ color: "#face8d" }}>{errors.price?.message}</p>
                  )}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>Enter category</label>
                  <select
                    className="cate"
                    name="category"
                    {...register("category")}
                  >
                    {categories.map((c) => (
                      <option key={c._id} value={c.category}>
                        {c.category}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>Enter class</label>
                  <select className="cate" name="class" {...register("class")}>
                    {data.map((d) => (
                      <option key={d._id} value={d.class}>
                        {d.class}
                      </option>
                    ))}
                  </select>
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

export default AddMenu;
