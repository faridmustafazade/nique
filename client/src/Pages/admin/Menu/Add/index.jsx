import React from "react";
import Aside from "../../../../Layouts/admin/Aside";
import Header from "../../../../Layouts/admin/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddForm } from "./schema/AddForm";
import "./style.scss";
import axios from "axios";

const AddMenu = () => {
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
    axios.post("http://localhost:2003/api/menu", {
      image: values.image,
      name: values.name,
      price: values.price,
      category: values.category,
      about: values.about,
    });
  };

  return (
    <>
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
              <div>
                <label>Enter category</label>
                <input {...register("category")} placeholder="Enter category" />
                {errors.category?.message && (
                  <p style={{ color: "#face8d" }}>{errors.category?.message}</p>
                )}
              </div>

              <button className="editing" type="submit">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMenu;
